import {createContext, useContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import {auth, database} from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';


export const authContext = createContext();

export const useAuth = () =>{
    const context = useContext(authContext);
    if (!context) throw new Error("There is no Auth provider");
    return context;
}

export function AuthProvide ({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //registrar
    const signup = async (email,password,nombre,apellidopaterno,apellidomaterno,numcontrol) => {
        const infousuatio = await createUserWithEmailAndPassword(auth,email,password).then((usuarioFirebase)=>{
            return usuarioFirebase;
        });
        const docuRef = doc(database, `/users/${infousuatio.user.uid}`);
        await setDoc(docuRef,{email:email, name:nombre, firstlasname:apellidopaterno, secondlasname:apellidomaterno, numcontrol:numcontrol});
    }

    //iniciar secio
    const login = async (email,password) => {
        await signInWithEmailAndPassword(auth,email,password);
    }

    //cerrar secion
    const logout = () => signOut(auth);

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    },[])

    return(
        <authContext.Provider value={{signup, login, user, logout, loading}}>
            {children}
        </authContext.Provider>
    )
}