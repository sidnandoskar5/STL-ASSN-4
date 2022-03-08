import React, { useState } from 'react'
import { useFetch } from './hooks/useFetch'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

import Navigation from './components/Navigation'
import Recipes from './components/Recipes'
import Search from './components/Search'

import './App.css'
import RecipeDetail from './components/RecipeDetail'


function App() {
    const [searchQuery, setSearchQuery] = useState('')
    const { data:recipes, isPending, error } = useFetch(searchQuery)

    const searchHandler = (query) => {
        setSearchQuery(query)
    }

    return (
        <div className="App">
            <Navigation />
            <Search searchHandler={searchHandler} />
            <BrowserRouter>
                <Switch> {/* Show one component at a time  */}
                    <Route exact path="/"> { /* Exact path match */}
                        { isPending && <p>Loading Recipes...</p> }
                        { error && <p>{ error }</p>}
                        { recipes && <Recipes recipes = {recipes} />}
                    </Route>
                    <Route path="/recipe/:name">
                        <RecipeDetail />
                    </Route>
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;