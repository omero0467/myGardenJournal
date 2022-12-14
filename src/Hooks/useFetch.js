import  { useEffect, useState } from 'react'
import { db } from '../firebase';
import { onSnapshot,collection, } from "firebase/firestore";

function useFetch() {
    const [PlantsData, setPlantsData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)


    async function getAllDocs () {
        const unsubscribe = onSnapshot(collection(db,"plants"), (querySnapshot)=>{
            const list = [];
            querySnapshot.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() });
            });
            
            setPlantsData((prev)=>prev=[...list])
            localStorage.setItem('plantsData', JSON.stringify(list))
        }, (err) => {
            console.log(err)
            setError(err)
        })
        return {unsubscribe}
    }
    
    
    useEffect(() => {
        setIsLoading(true)
            const localData = JSON.parse(localStorage.getItem('plantsData'))
        if (localData) {
            console.log('inside if');
            setPlantsData(localData)
        } else {
        const {unsubscribe} = getAllDocs()
        console.log('inside else');
        return () => {
            unsubscribe();
        };
    }
        }, [])

    return {PlantsData,isLoading,error}
}

export default useFetch