import React, { useContext } from "react"
import  { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/authContext"


function Login(){

    const navigate = useNavigate()

    const[inputs, setInputs] = useState({
        username: "",
        password: ""
    })

    const[err, setError] = useState()

    const{login} = useContext(AuthContext);

    const handleChange = (e) =>{
        const{name, value} = e.target

        setInputs((prevInput)=>{
            return{
                ...prevInput, [name]:value
            }
        })
    } 

    const handleSubmit = async e =>{
        e.preventDefault()
        try{
            await login(inputs)
            navigate("/")
        }catch(err){
            setError(err.response.data)
        }
    }
    return(
        <div className="auth">
            <h1>Login</h1>
            <form action="">
                <input type="text"
                placeholder="username"
                name="username"
                onChange={handleChange}
                autoComplete="true"
                 />

                <input type="password"
                placeholder="password"
                name="password"
                onChange={handleChange}
                autoComplete="true" />    

                <button onClick={handleSubmit}>Login</button>
                {err && <p>{err}</p>}
                <span>Don't you have an account?<Link to="/register">Register</Link></span>
            </form>
        </div>
    )
}

export{Login}