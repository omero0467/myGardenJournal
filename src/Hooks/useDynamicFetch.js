import  { useEffect, useState } from 'react'
import { db } from '../firebase';
import { onSnapshot,collection, } from "firebase/firestore";

function useDynamicFetch(pax) {
    const [paxData, setPaxData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)


    async function getAllDocs () {
        const unsubscribe = onSnapshot(collection(db,pax), (querySnapshot)=>{
            const list = [];
            querySnapshot.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() });
            });
            
            setPaxData((prev)=>prev=[...list])
            localStorage.setItem(pax, JSON.stringify(list))
        }, (err) => {
            console.log(err)
            setError(err)
        })
        return {unsubscribe}
    }
    
    //!check improve efficency with local storage
    useEffect(() => {
        setIsLoading(true)
            const localData = JSON.parse(localStorage.getItem(pax))
            // if (localData) {
                //     console.log('inside if');
                const {unsubscribe} = getAllDocs()
            setPaxData(localData)
        // } else {
        console.log('inside else');
        return () => {
            unsubscribe();
        };
    // }
        }, [pax])

        console.log('dynamicFetch');

    return {paxData,isLoading,error}
}

export default useDynamicFetch