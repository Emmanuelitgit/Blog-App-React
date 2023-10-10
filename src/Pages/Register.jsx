import axios from "axios"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


function Register(){

    const[file, setFile] = useState(null);

    const upload = async ()=>{
        try{
            const formData = new FormData();
            formData.append("file", file)
            const res = await axios.post("/upload", formData)
            return res.data
        }catch(err){
            console.log(err)
        }
    }

    const navigate = useNavigate()

    const[inputs, setInputs] = useState({
        username: "",
        email: "",
        password: ""
    })

    const[err, setError] = useState()

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
        const imgUrl = await upload()
        try{
            await axios.post(`/auth/register`, inputs, {img:file? imgUrl : ""});
            navigate("/login")
        }catch(err){
            setError(err.response.data)
        }
    }


    return(
        <div className="auth">
            <h1>Register</h1>
            <form action="">
                <input required type="text"
                placeholder="username"
                name="username"
                onChange={handleChange}
                 />

                <input required type="email"
                placeholder="email"
                name="email"
                onChange={handleChange}
                 />

                <input required type="password"
                placeholder="password"
                name="password"
                onChange={handleChange}
                autoComplete="true"
                 />
                 <input style={{border:"none"}} type="file" name="file" id="file" onChange={e=>setFile(e.target.files[0])} />

                <button onClick={handleSubmit}>Register</button>
                {err && <p>{err}</p>}
                <span>Don you have an account?<Link to="/login">Login</Link></span>
            </form>
        </div>
    )
}

export{Register}