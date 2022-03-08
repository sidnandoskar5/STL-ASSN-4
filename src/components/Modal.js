import React from 'react'

function Modal({ recipe }) {
    const getTime = (time) => {
        if(!time) return 'N/A'
        return time
    }
  return (
    <div className='recipe-modal'>
        {recipe && (
            <div className='recipe-card'>
                <figure className='recipe-img'>
                    <img src={recipe.image} alt={recipe.name} loading='lazy'/>
                </figure>
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
                            <span className='recipe-info__value'>{recipe.recipeYield}</span>
                        </li>
                    </ul>
                    <div className='card-buttons'>
                        <buttons className="btn view">View Recipe</buttons>
                        <buttons className="btn fav">Add to Favorites</buttons>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Modal