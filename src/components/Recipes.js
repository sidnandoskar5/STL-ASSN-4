import RecipeCard from './RecipeCard'

function Recipes({ recipes }) {
    
    return (
        <ul className='recipe-list'>
            { recipes.map((recipe, index) => <RecipeCard key={index} recipe={recipe} /> ) }
        </ul>
    )
}

export default Recipes