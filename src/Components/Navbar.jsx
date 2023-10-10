import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../Context/authContext"
import axios from "axios";


function Navbar(){

    const {currentUser, logout} = useContext(AuthContext);
    const[userProfile, setUserProfile] = useState(false);
    const[userImg, setUserImg] = useState([]);

    // const user = currentUser.username?.charAt(0).toUpperCase()
    // console.log(user)

    const handleClick =()=>{
        setUserProfile((prev)=> !prev)
    };

    useEffect(()=>{
        const fetchData = async () => {
         try{
             const res = await axios.get("/posts/user/img");
             setUserImg(res.data);
         }catch(err){
             console.log(err);
         }
        }
        fetchData();
     }, []);


    return(
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <span className="manuel">Manuel Blog</span>
                        <span className="tech">Tech & Politics</span>
                    </Link>
                </div>
                <div className="links">
                    <Link className="link" to="/?cat=health">
                        <h6>HEALTH</h6>
                    </Link>
                    <Link className="link" to="/?cat=science">
                        <h6>SCIENCE</h6>
                    </Link>
                    <Link className="link" to="/?cat=technology">
                        <h6>TECHNOLOGY</h6>
                    </Link>
                    <Link className="link" to="/?cat=politics">
                        <h6>POLITICS</h6>
                    </Link>
                    <Link className="link" to="/?cat=design">
                        <h6>DESIGN</h6>
                    </Link>
                    <Link className="link" to="/?cat=food">
                        <h6>FOOD</h6>
                    </Link>
                    {!currentUser? <span className="write">
                        <Link className="link" to="/login">Write</Link>
                    </span> : <span className="write">
                        <Link className="link" to="/write">Write</Link>
                    </span>}
                   
                   <div className="profile">
                    {currentUser && 
                    <span className="profile-btn" onClick={handleClick}>
                        {currentUser?.username.charAt(0).toUpperCase()}
                        {/* <img src={`../uploads/${userImg?.img}`} alt="" /> */}
                    </span>}
                    {currentUser? 
                    (
                        userProfile && 
                        <div className="profile-details">
                            <span onClick={logout}  to="/login" >Logout</span>
                            <span>{currentUser?.username}</span>
                            <span>Update</span>
                        </div>
                    ) 
                    : 
                    (<Link className="link login" to="/login" >Login</Link>)}
                 </div>
                </div>
            </div>
        </div>
    )
}

export{Navbar}