import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import { database } from "../../firebase";
import { useAuth } from "../context/authContext";

export const Perfil = () => {
    const {id} = useParams();
    const {loading} = useAuth();

    const [infousre, setInfouser] = useState({});

    const getInfouser = async(id) =>{
        const docRef = doc(database,"users",id);
        const docSnap = await getDoc(docRef);
        
        if(docSnap.exists()){
            //console.log("datos: ",docSnap.data());
            setInfouser(docSnap.data());
        }else{
            console.log("data no encontrada");
            alert("datos no encontrados");
        }
    }

    useEffect(() =>{
        getInfouser(id);
    },[])

    if(loading) return <h1>loading</h1>

    return(
        <>
            <h1>Perfil</h1>
            <h5>{infousre.name}</h5>
            <h5>{infousre.firstlasname}</h5>
            <h5>{infousre.secondlasname}</h5>
            <h5>{infousre.numcontrol}</h5>
            <h5>{infousre.email}</h5>
        </>
    )
}