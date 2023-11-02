import { useState } from "react"
import {useAuth} from '../context/authContext'
import {useNavigate} from 'react-router-dom'

export const Register = () =>{
    const [user,setUser] = useState({
        email:'',
        nombre:'',
        apellidopaterno:'',
        apellidomaterno:'',
        numcontrol:'',
        carrera:'',
        password:'',
    });

    const {signup} = useAuth();
    const navigate = useNavigate();
    const [erroru, setErroru] = useState();

    const handleChange = ({target:{name,value}}) =>{
        setUser({...user, [name]:value});
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        setErroru('');
        try {
            await signup(user.email,user.password,user.nombre,user.apellidopaterno,user.apellidomaterno,user.numcontrol);
            navigate('/login');
        } catch (error) {
            console.log(error.code);
            if(error.code == 'auth/weak-password'){
                setErroru('La contraceña deve ser de 6 caracteres');
            }
            
        }
    }

    return (
        <>
            <div>
                {erroru && <p>{erroru}</p>}
                <form onSubmit={handleSubmit}>

                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    name="email" 
                    placeholder="i20356797@puebla.tecnm.mx" 
                    onChange={handleChange}/>

                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" 
                    name="nombre"
                    onChange={handleChange}/>

                    <label htmlFor="apellidopaterno">Apellido Paterno</label>
                    <input type="text" 
                    name="apellidopaterno"
                    onChange={handleChange}/>

                    <label htmlFor="apellidomaterno">Apellido Materno</label>
                    <input type="text" 
                    name="apellidomaterno"
                    onChange={handleChange}/>

                    <label htmlFor="numcontrol">Numero de control</label>
                    <input type="text" 
                    name="numcontrol" 
                    onChange={handleChange}/> 

                    <label htmlFor="password">Password</label>
                    <input type="password" 
                    name="password" 
                    id="password" 
                    onChange={handleChange}/>

                    <button>Registrarse</button>

                </form>
            </div>
        </>
    )
}