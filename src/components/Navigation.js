import React, { useState } from 'react'
import { useUser } from '../hooks/useUser'

function Navigation() {
    const {user, grocery} = useUser()
    const [showList, setShowList] = useState(false)
    const clickHandler = (e) => {
        setShowList(prevState => !prevState)
    }

    return (
        <nav className='nav'>
            <span className='nav_item grocery-menu tran' onClick={clickHandler}>Grocery List</span>
            <span className='nav_item user'>{ `Welcome, ${user}` }</span>
            {(showList && grocery) && (<ul className='grocery-list'>
                {grocery.map((item) => <li key={item}>{item}</li>)}
            </ul>)}
        </nav>
    )
}

export default Navigation