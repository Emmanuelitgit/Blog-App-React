import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";


function Home(){

    const [posts, setPosts] = useState([]);

    const cat = useLocation().search;
    console.log(cat)
 
    useEffect(()=>{
       const fetchData = async () => {
        try{
            const res = await axios.get(`/posts/${cat}`);
            setPosts(res.data);
        }catch(err){
            console.log(err);
        }
       }
       fetchData();
    }, [cat]);
   

    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }
    return(
        <div className="home">
            <div className="posts">
                {posts.map((post)=>(
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img  alt="" src={`../uploads/${post.img}`} />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p className="desc">{getText(post.desc)}.....</p>
                            <button><Link to={`/post/${post.id}`} className="btn-link">Read More</Link></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export{Home}

    // const posts =[
    //     {
    //         id: 1,
    //         tittle: "Vice president Dr. Mahamudu bawumia clashes with alan kojo kyremanten",
    //         desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque optio voluptate ea at, ab aut, praesentium laboriosam obcaecati dolor magnam architecto doloremque ratione ipsam ad nam in esse exercitationem dolorem.",
    //         img: img
    //     },

    //     {
    //         id: 1,
    //         tittle: "Vice president Dr. Mahamudu bawumia clashes with alan kojo kyremanten",
    //         desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque optio voluptate ea at, ab aut, praesentium laboriosam obcaecati dolor magnam architecto doloremque ratione ipsam ad nam in esse exercitationem dolorem.",
    //         img: img
    //     },

    //     {
    //         id: 1,
    //         tittle: "Vice president Dr. Mahamudu bawumia clashes with alan kojo kyremanten",
    //         desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque optio voluptate ea at, ab aut, praesentium laboriosam obcaecati dolor magnam architecto doloremque ratione ipsam ad nam in esse exercitationem dolorem.",
    //         img: img
    //     },

    //     {
    //         id: 1,
    //         tittle: "Vice president Dr. Mahamudu bawumia clashes with alan kojo kyremanten",
    //         desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque optio voluptate ea at, ab aut, praesentium laboriosam obcaecati dolor magnam architecto doloremque ratione ipsam ad nam in esse exercitationem dolorem.",
    //         img: img
    //     },
    // ]