import initilazeAuthentication from "../Pages/Login/firebase/firebase.initilaze";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initilazeAuthentication();
const useFirebase =()=>{
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);

    const auth = getAuth();

    const googleSingIn = () =>{
        const googleProvider = new GoogleAuthProvider()

        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
           
        }).finally(() =>{
            setIsloading(false)
        })
    }

    useEffect(()=>[
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsloading(false);
        })
    ],[])

    const logOut =() =>{
        signOut(auth).then(()=>{
            setUser({})
        }).finally(() =>{
            setIsloading(false)
        })
    }

    return {
        user, 
        googleSingIn,
        logOut,
        isLoading
    }
}


export default useFirebase;