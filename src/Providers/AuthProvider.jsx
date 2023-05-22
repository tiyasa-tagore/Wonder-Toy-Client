import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);
//google
const provider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userUpdate = (currentUser, displayName, photoURL) => {
        return updateProfile(currentUser, {
            displayName: displayName,
            photoURL: photoURL,
        })
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }

   


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const signOutGoogle = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        // eslint-disable-next-line no-unused-vars
        }).catch((error) => {
            // An error happened.
        });
    }
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        googleSignIn,
        signOutGoogle,
        userUpdate,
        user,
        loading,
        error,
        createUser, 
        signIn, 
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;