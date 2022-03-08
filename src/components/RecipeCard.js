import React from 'react'
import { NavLink } from 'react-router-dom'

function RecipeCard({ recipe }) {
    
    const getTime = (time) => {
        if(!time) return 'N/A'
        return time
    }

    return (
        <li className="recipe">
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
                            <span className='recipe-info__value'>
                                {!recipe.recipeYield && 'N/A'}
                                {recipe.recipeYield && recipe.recipeYield}
                            </span>
                        </li>
                    </ul>
                    <div className='card-buttons'>
                        <NavLink className="btn view" to={`recipe/${encodeURI(recipe.name)}`}>View Recipe</NavLink>
                        <button className="btn fav">Add to Favorites</button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default RecipeCard