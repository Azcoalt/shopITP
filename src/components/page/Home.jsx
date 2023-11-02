import { Navigate } from "../Navigate" 


export const Home = () =>{
    return (
        <>
            <header className="py-3 px-10 flex items-center fixed top-0 w-full justify-between font-sans">
                <div className="flex flex-grow basis-0">
                    <h1>home</h1>
                </div>
                <Navigate/>
            </header>
        </>
    )
}