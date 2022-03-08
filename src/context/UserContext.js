import { createContext, useReducer } from "react";

export const UserContext = createContext()

const userReducer = (state, action) => {
    switch(action.type){
        case 'UPDATE_GROCERY':
            return {...state, grocery: [...state.grocery, action.payload]}
        default:
            return state
    }
}

export const UserProvider = ({children}) => {

    const [ state, dispatch ] = useReducer(userReducer,{
        user: 'Siddhesh',
        grocery: [],
    })

    const providerValue = {...state, dispatch}

    return (
        <UserContext.Provider value={providerValue}>
        {children}
        </UserContext.Provider>
    )
}