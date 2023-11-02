import { useState } from 'react';
import {database} from '../firebase';
import {collection, doc, getDocs} from "firebase/firestore";

export const useAddproducts = () =>{
    const [products,setProducts] = useState([]);
    const [getuser, setGetuser] = useState();

    const getProducs = async () =>{
        const querySanpshot = await getDocs(collection(database,"productos"));
        const docs = [];
        querySanpshot.forEach(doc => {
            //console.log(doc.data());
            docs.push({id:doc.id, ...doc.data()});
        });
        setProducts(docs);
    }

    const getusers = async () =>{
        const querySanpshot = await getDocs(collection(database,"users"));
        const docs = [];
        querySanpshot.forEach(doc => {
            docs.push({id:doc.id, ...doc.data()});
        })
        setGetuser(docs);
    }

    return{
        getProducs,
        products,
        getusers,
        getuser
    }
}