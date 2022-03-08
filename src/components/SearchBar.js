import React from 'react'

function SearchBar({ searchHandler }) {
    
    return (
        <form className='search-bar'>
            <input 
                id="search" 
                type="text" 
                onChange={(e) => searchHandler(e.target.value)} 
                placeholder="Search"
                required
            />
        </form>
    )
}

export default SearchBar