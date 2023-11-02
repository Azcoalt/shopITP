import {Link} from 'react-router-dom';

export const Navigate = () => {
    return(
        <>
            <nav className="flex flex-grow justify-end basis-0">
                <ul className="flex text-sm [&>li]:text-slate-100 [&>li]:font-medium [&>li]:inline-block [&>li]:px-4 [&>li]:py-2">
                    <li>
                        <Link to="/login">INICIAR SESION</Link>
                    </li>
                    <li>
                        <Link to="/register">REGISTRARSE</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}