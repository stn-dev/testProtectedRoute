import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

function AuthContext() {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("user")) {
            navigate("/login")
        }
    }, [pathname])
    return (
        <>
            <Outlet />
        </>
    )
}

export default AuthContext