import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NavLink, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate } from 'react-router-dom'
import Login from './page/Login.jsx'
import Home from './page/Home.jsx'
import Profil from './page/Profil.jsx'
import About from './page/About.jsx'
import AuthContext from './page/component/authContext.jsx'



const Root = () => {

  const navigate = useNavigate()


  return (
    <>
      <nav>
        <NavLink to="/login">login</NavLink>
        <br />
        <NavLink to="/auth/home">home</NavLink>
        <br />
        <NavLink to="/auth/profil">profil</NavLink>
        <br />
        <NavLink to="/auth/about">about</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} >
      <Route path='/login' element={<Login />} />
      <Route path='/auth' element={<AuthContext />} >
        <Route path='/auth/home' element={<Home />} />
        <Route path='/auth/profil' element={<Profil />} />
        <Route path='/auth/about' element={<About />} />
      </Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)



