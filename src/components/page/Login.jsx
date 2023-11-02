import { useEffect, useState } from "react"
import {useAuth} from '../context/authContext'
import {redirect, useNavigate} from 'react-router-dom'

export const Login = () =>{
    const [user,setUser] = useState({
        email:'',
        password:''
    });

    const {login} = useAuth();
    const navigate = useNavigate();
    //const [erroru, setErroru] = useState();

    const handleChange = ({target:{name,value}}) =>{
        setUser({...user, [name]:value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErroru('');
        try {
            await login(user.email,user.password);
            navigate("/shop");
        } catch (error) {
            console.log(error.code);
            if(error.code == 'auth/weak-password'){
                setErroru('La contraceña deve ser de 6 caracteres');
            }
            
        }
        
    }

    return (
        <>
            <div className="w-full min-h-screen flex justify-center items-center bg-gray-900">
                <div className="relative w-[480px] h-[520px] bg-gray-800 rounded-lg overflow-hidden">
                    <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-blue-600 via-blue-600 to-transparent -top-[50%] -left-[50%] animate-spin-slow origin-bottom-right"></div>
                    <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-rose-600 via-rose-600 to-transparent -top-[50%] -left-[50%] animate-spin-delay origin-bottom-right"></div>
                    <div className="absolute inset-1 bg-gray-800 rounded-lg z-10 p-5">
                        <form onSubmit={handleSubmit}>
                            <h2 className="text-xl font-sans text-white text-center mb-20">SING IN</h2>
                            <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <div class="relative mb-6">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 mx-auto my-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                    </svg>
                                </div>
                                <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                 focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 
                                 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                                 dark:focus:border-blue-500" 
                                 type="email" 
                                 name="email" 
                                 id="email" 
                                 placeholder="name@flowbite.com" 
                                 onChange={handleChange}/>
                            </div>
                            <div class="relative mb-6">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                type="password" 
                                name="password" 
                                id="password"  
                                placeholder="•••••••••" 
                                onChange={handleChange} required/>
                            </div>
                            <div className="relative mb-20">
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}