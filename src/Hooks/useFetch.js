import  { useEffect, useState } from 'react'
import axios from "axios";


const localData = JSON.parse(localStorage.getItem('plantsData'))

function useFetch(url) {
    const [PlantsData, setPlantsData] = useState(localData?localData:false) 
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    

    useEffect(()=>{
        setIsLoading(true)
        async function getData (){
            try{
            const { data } = await axios.get('http://localhost:3003/House_Plants2')
            setPlantsData(data)
            localStorage.setItem('plantsData', JSON.stringify(data))
        }catch(err){
            console.log(err);
            setError(err)
        }
        }
    

            if(localData){
                // console.log('inside if');
                setPlantsData(localData)
            } else {
                // console.log('inside else');
                getData()
            }

    },[url])

    return {PlantsData,isLoading,error}
}

export default useFetch