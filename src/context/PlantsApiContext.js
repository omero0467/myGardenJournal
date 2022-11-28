import React, {  createContext, useContext, useReducer } from 'react'
import axios from 'axios'
import PlantsREDUCER from './PlantsREDUCER'
import useFetch from '../Hooks/useFetch'

const PlantsDataContext = createContext()

function PlantsApiContext({ children }) {
    const {PlantsData} = useFetch('http://localhost:3003/House_Plants2')
    const [PlantsState, dispatch] = useReducer(PlantsREDUCER, PlantsData)


    return (
        <PlantsDataContext.Provider value={{
            dispatch,
            PlantsState
        }}>
            {children}
        </PlantsDataContext.Provider>
    )
}

export function ProvidePlantsContext() {
    return useContext(PlantsDataContext)
}

export default PlantsApiContext