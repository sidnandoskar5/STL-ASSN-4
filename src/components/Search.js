import React from 'react'
import SearchBar from './SearchBar'

function Search({ searchHandler }) {
    
    return (
        <section className="search">
            <h1 className="logo">
                <img src="/logo.png" alt="Recipe Finder" />
            </h1>
            <SearchBar searchHandler={searchHandler} />
        </section>
    )
}

export default Search