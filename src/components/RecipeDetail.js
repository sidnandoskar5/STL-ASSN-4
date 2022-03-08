import React, { useEffect, useState } from 'react'

import { useParams } from "react-router-dom"

import '../App.css'
import { useUser } from '../hooks/useUser'

function RecipeDetail() {
    const { name } = useParams()
    const [recipe, setRecipe] = useState()

    const {dispatch} = useUser()
   
    useEffect(() => {
        fetch('/recipes.json')
            .then(res => res.json())
            .then(data => {
                setRecipe(data.filter(recipe => recipe.name === name)[0])
            })
    },[name])

    const getTime = (time) => {
        if(!time) return 'N/A'
        return time
    }

    const addIngredient = (ing) => {
        dispatch({type: 'UPDATE_GROCERY', payload:ing})
    }

    if(!recipe){
        return "<p>Recipes details not available.</p>"
    }

    return (
        <div className='recipe-detail'>
            <div className='recipe-card'>
                {recipe.image && (<figure className='recipe-img'>
                    <img src={recipe.image} alt={recipe.name} loading='lazy'/>
                </figure>)}
                <div className='recipe-content'>
                    <h2 className='recipe__title'>{recipe.name}</h2>
                    <ul>
                        <li>
                            <span className='recipe-info__label'>CookTime: </span>
                            <span className='recipe-info__value'>{getTime(recipe.cookTime)}</span>
                        </li>
                        <li>
                            <span className='recipe-info__label'>PrepTime: </span>
                            <span className='recipe-info__value'>{getTime(recipe.prepTime)}</span>
                        </li>
                        <li>
                            <span className='recipe-info__label'>Yield: </span>
                            <span className='recipe-info__value'>
                                {!recipe.recipeYield && 'N/A'}
                                {recipe.recipeYield && recipe.recipeYield}
                            </span>
                        </li>
                    </ul>
                    <p className='recipe-description'>{recipe.description}</p>
                    <div className='ingredients'>
                        <div className='heading'>ingredients</div>
                        <ul className='ingredients-list'>
                            {recipe.ingredients.map(ing => <li key={ing}>{ing} <button onClick={() => addIngredient(ing)}>+</button></li>)}
                        </ul>
                    </div>
                    <div className='card-buttons'>
                        <button className="btn fav">Add to Favorites</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail