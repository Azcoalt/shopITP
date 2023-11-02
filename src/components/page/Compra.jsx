import { useAuth } from "../context/authContext";
import {useParams} from 'react-router-dom';
import {database} from '../../firebase'
import {doc, getDoc} from 'firebase/firestore'
import { useState } from "react";
import { useEffect } from "react";

export const Compra = () =>{
    const {user, loading} = useAuth();
    if(loading) return <h1>loading</h1>

    const {id} = useParams();

    const [prod,setProt] = useState([])

    const getProd = async(id) =>{
        const docRef = doc(database,"productos",id);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            //console.log("datos: ",docSnap.data());
            setProt(docSnap.data());
        }else{
            console.log("data no encontrada");
        }
    }

    useEffect(()=>{
        getProd(id);
    },[])

    return(
        <>
            <h1>Compra { user.email }</h1>
            <h3>product {prod.name}</h3>
            <h3>Precio: ${prod.price}</h3>
        </>
    )
}