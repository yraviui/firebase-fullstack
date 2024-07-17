import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const signUp = async (email, password) => await createUserWithEmailAndPassword(auth, email, password)
    const logIn = async (email, password) => await signInWithEmailAndPassword(auth, email, password)
    const logOut = () => signOut(auth)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])
    let values = { user, signUp, logIn, logOut }
    return (
        <UserContext.Provider value={values}>{children}</UserContext.Provider>
    )
}

export const UserAuth = () => useContext(UserContext)