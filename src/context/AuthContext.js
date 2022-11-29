import React, { createContext, useContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from '../firebase';
import { getDoc, doc } from 'firebase/firestore';


export const UserContext = createContext()


export function AuthContext({ children }) {

    const [UserData, setUserData] = useState({})

    const [user, setUser] = useState({})

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const getUserDoc = async (docRef) => {
        const docSnap = await getDoc(docRef)
        try {
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setUserData(docSnap.data())
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)

            const docRef = doc(db, "users", currentUser.uid);
            // console.log(docRef);
            getUserDoc(docRef)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <UserContext.Provider value={{ createUser, user, logout, signIn, UserData }}>
            {children}
        </UserContext.Provider>
    )
}

export function UserAuth() {
    return useContext(UserContext)

}