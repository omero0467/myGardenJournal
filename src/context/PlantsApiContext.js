import React, { createContext, useContext, useReducer } from 'react'

import PlantsREDUCER from './PlantsREDUCER'
import useFetch from '../Hooks/useFetch'

const PlantsDataContext = createContext()

function PlantsApiContext({ children }) {
    const {PlantsData} = useFetch()
    const [PlantsState, dispatch] = useReducer(PlantsREDUCER, PlantsData)

    return (
        <PlantsDataContext.Provider value={{
            dispatch,
            PlantsData,
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