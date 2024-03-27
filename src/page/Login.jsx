import React, { useState } from 'react'


function Login() {
    const [user, setUser] = useState("")

    console.log(user)

    const toLocalStorage = () => {
        localStorage.setItem("user", user)
        setUser("")
    }

    const logOut = () => {
        localStorage.removeItem("user")
        setUser("")
    }

    return (
        <div>
            <h2>welcome to the login page</h2>
            <p>click the button for login</p>
            <label htmlFor="user">userName</label>
            <input type="text" id='user' value={user} onChange={(e) => setUser(e.target.value)} />
            <button type="button" onClick={toLocalStorage} >login</button>
            <button type='reset' onClick={logOut}>log out</button>
        </div>
    )
}

export default Login