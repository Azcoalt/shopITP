import { useState } from "react"
import {useAuth} from '../context/authContext'
import {useNavigate} from 'react-router-dom'
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"

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
            <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500">
                <div className="relative w-[480px] h-[520px] backdrop-blur-xl bg-transparent p-8 rounded-lg space-y-6 shadow-lg overflow-hidden">
                    {/* <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-blue-600 via-blue-600 to-transparent -top-[50%] -left-[50%] animate-spin-slow origin-bottom-right"></div>
                    <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-rose-600 via-rose-600 to-transparent -top-[50%] -left-[50%] animate-spin-delay origin-bottom-right"></div> */}
                        {erroru && <p>{erroru}</p>}
                        <form onSubmit={handleSubmit}>
                            {/* <div className=" bg-transparent p-8 rounded-lg space-y-6"> */}
                                <div className="space-y-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">Email</label>
                                    <div className="relative mb-6">
                                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                        focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 
                                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                                        dark:focus:border-blue-500" type="email" 
                                        name="email" 
                                        placeholder="i20356797@puebla.tecnm.mx" 
                                        onChange={handleChange}/>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="nombre">Nombre</label>
                                    <div className="relative mb-6">
                                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                        focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 
                                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                                        dark:focus:border-blue-500" type="text" 
                                        name="nombre"
                                        onChange={handleChange}/>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="apellidopaterno">Apellido Paterno</label>
                                    <div className="relative mb-6">
                                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                        focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 
                                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                                        dark:focus:border-blue-500" type="text" 
                                        name="apellidopaterno"
                                        onChange={handleChange}/>
                                    </div>
                                </div>
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
                            {/* </div> */}
                        </form>
                    
                </div>
            </div>
        </>
    )
}