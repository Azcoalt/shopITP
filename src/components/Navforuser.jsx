import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/authContext';

export const Navforuser = () =>{
    const {user,logout,} = useAuth();

    const naigate = useNavigate();

    const handleLogout = async() =>{
        await logout()
        naigate('/');
    }

    return(
        <>
            <nav>
                <ul className="flex text-sm [&>li]:inline-block [&>li]:px-4 [&>li]:py-2">
                    <li>
                        <Link to={`/perfil/${user.uid}`}>Perfil</Link>
                    </li>
                    <li>
                        <Link>Compras</Link>
                    </li>
                    <li>
                        <button onClick={handleLogout}> CERRAR SESION </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}