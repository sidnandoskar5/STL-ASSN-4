import { useState, useEffect } from "react"

export const useFetch = (searchQuery) => {
  const url = './recipes.json'
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      setIsPending(true)
      
      try {
        const res = await fetch(url, { signal: controller.signal })
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        let data = await res.json()

        if(searchQuery){
          data = data.filter((recipe) => {
            return (
              recipe.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1 ||
              recipe.description.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1 ||
              recipe.ingredients.filter(ing => {
                return ing.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
              }).length > 0
            )
          })
        }

        setIsPending(false)
        setData(data)
        setError(null)
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted")
        } else {
          setIsPending(false)
          setError('Could not fetch the data')
        }
      }
    }

    fetchData()

    return () => {
      controller.abort()
    }

  }, [url,searchQuery])

  return { data, isPending, error }
}