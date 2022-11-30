import { useEffect, useState } from 'react'
import { db } from '../firebase';
import { onSnapshot, collection, query, where, } from "firebase/firestore";

function useDynamicFetch(pax, user) {

    const [paxData, setPaxData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)


    //!check improve efficency with local storage
    useEffect(() => {
        setIsLoading(true)
        // const localData = JSON.parse(localStorage.getItem(pax))

    async function getAllDocs() {

        try {
            
            const q = query(collection(db, pax), where("createdBy", "==", user.uid));
    
            const unsubscribe = onSnapshot(q, { includeMetadataChanges: true }, (querySnapshot) => {
                const list = [];
                querySnapshot.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
    
                setPaxData((prev) => prev = [...list])
                localStorage.setItem(pax, JSON.stringify(list))
    
            }, (err) => {
                console.log(err)
                setError(err)
            })
            return { unsubscribe }
        } catch (error) {
            console.log(error);
            }
        }
        // if (localData) {
        //     console.log('inside if');
        const { unsubscribe } = getAllDocs()
        // setPaxData(localData)
        // } else {
        // console.log('inside else');
        return () => {
            unsubscribe();
        };
        // }
    }, [pax,user])

    console.log('dynamicFetch');

    return { paxData, isLoading, error }
}

export default useDynamicFetch