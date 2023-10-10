import React, { useContext, useEffect, useState } from "react"
import edit from "../img/edit.png"
import deleteImg from "../img/delete.png"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Menu } from "../Components/Menu"
import axios from "axios"
import { AuthContext } from "../Context/authContext"
import moment from "moment"


function Single(){

    const navigate = useNavigate()
    
    const [post, setPost] = useState([]);

    const location = useLocation();
    const postId = location.pathname.split("/")[2]; 
    const{currentUser} = useContext(AuthContext)

    useEffect(()=>{
       const fetchData = async () => {
        try{
            const res = await axios.get(`/posts/${postId}`);
            setPost(res.data);
        }catch(err){
            console.log(err);
        }
       }
       fetchData();
    }, [postId]);

    const handleDelete = async (e) => {
        e.preventDefault()
        try{
            await axios.delete(`/posts/${postId}`);
            navigate("/")
        }catch(err){
            console.log(err);
        }
       }

       const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }

    return(
        <div className="single">
            <div className="content">
                <img  alt="" src={`../uploads/${post.img}`} className="post-img"/>
                <div className="user">
                    <img src={`../uploads/${post.img}`} alt="" />
                    <div className="info">
                        {currentUser?<span className="span">{post?.username}</span> : <span className="span"></span>}<br />
                        <span>posted {moment(post.date).fromNow()}</span>
                    </div>
                    {currentUser?.username===post.username && <div className="edit">
                        <Link to={`/write/?edit=${post.id}`} state={post}>
                        <img src={edit} alt="" />
                        </Link>
                        <img src={deleteImg} alt="" onClick={handleDelete}/>
                    </div>}
                </div>
                <h1>{post.title}</h1>
                <p>{getText(post.desc)}</p>
            </div>
            <Menu cat={post.cat}/>
        </div>
    )
}

export{Single}