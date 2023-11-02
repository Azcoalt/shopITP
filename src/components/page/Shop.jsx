import { useAuth } from '../context/authContext';
import { useEffect } from 'react';
import { Link  } from 'react-router-dom'
import { useAddproducts } from '../../hooks/useAddproducts';
import { Navforuser } from '../Navforuser';



export const Shop = () =>{
    const {user, loading} = useAuth();
    //console.log(user);
    

    const {getProducs,products,getusers} = useAddproducts()

    useEffect(() => {
        getProducs();
        getusers();
    },[])

    if(loading) return <h1>loading</h1>


        return (
            <>
                <Navforuser/>
                <h1>welcome to Shop { user.email } </h1>
                <div>
                    {products.map(product => (
                        <>
                            <li  key={product.id} >
                                <h3>{product.name} {product.price}</h3>
                                <Link to={`/compra/${product.id}`}>COMPRAR</Link>
                            </li>
                        </>
                    ))}
                </div>
                
            </>
        )
}