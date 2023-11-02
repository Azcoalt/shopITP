//import {Route,Router,Link} from 'midu-router';
import { Route, Routes } from "react-router-dom";
import { Home, Login, Register, Shop} from './components/page';
import {AuthProvide} from './components/context/authContext';
import { ProtectedRouter } from "./components/ProtectedRouter";
import { Compra } from "./components/page/Compra";
import { Perfil } from "./components/page/Perfil";

function App() {
  
  return (
    <>
      <div className='dark:bg-gray-900 h-screen'>
        <AuthProvide>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element=
              <ProtectedRouter>
                {<Shop/>}
              </ProtectedRouter>
            />
            <Route path="/compra/:id" element=
              <ProtectedRouter>
                {
                  <Compra/>
                }
              </ProtectedRouter>
              // <Compra/>
            />
            <Route path="/perfil/:id" element=
              <ProtectedRouter>
                {
                  <Perfil/>
                }
              </ProtectedRouter>
              // <Compra/>
            />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </AuthProvide>
      </div>
    </>
  )
}

export default App
