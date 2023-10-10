import axios from "axios";
// import moment from "moment";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useLocation, useNavigate } from "react-router-dom";


function Write(){

    const state = useLocation().state
    const navigate = useNavigate()

    const[title, setTitle] = useState(state?.title || "");
    const[desc, setDesc] = useState(state?.desc || "");
    const[file, setFile] = useState(null);
    const[cat, setCat] = useState(state?.cat || "");

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
    
    const handleClick = async e =>{
        e.preventDefault()
        const imgUrl = await upload()

        try{
            state
            ? await axios.put(`/posts/${state.id}`, {
                title, 
                desc: desc,
                cat,img:file ? imgUrl:""
            })
            : await axios.post("/posts/", {
                title, 
                desc:desc, 
                cat, img:file ? imgUrl:"" 
        });
        navigate("/")
    }catch(err){
        console.log(err)
    }}

    return(
        <div className="add">
            <div className="content">
                <input type="text" value={title} placeholder="title" onChange={e=>setTitle(e.target.value)} />
                <div className="editorContainer">
                    <ReactQuill className="editor" theme="snow" value={desc} onChange={setDesc}/>
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status</b> Draft
                    </span>
                    <span>
                        <b>Visibility</b> Public
                    </span>
                    <input style={{display:"none"}} type="file" name="file" id="file" onChange={e=>setFile(e.target.files[0])} />
                    <label className="file" htmlFor="file">Upload Image</label>
                    <div className="buttons">
                    <button>Save as a draft</button>
                    <button onClick={handleClick}>Publish</button>
                    </div>
                </div>
                <div className="item">
                    <div className="cat">
                    <h1>Category</h1>
                    <div className="cat-item">
                    <input type="radio" checked={cat === "health"} name="cat" value="health" id="health" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor="art">Health</label>
                    </div>
                    <div className="cat-item">
                    <input type="radio" checked={cat === "science"} name="cat" value="science" id="science" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor="science">Science</label>
                    </div>
                    <div className="cat-item">
                    <input type="radio" checked={cat === "technology"} name="cat" value="technology" id="technology" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor="technology">Technology</label>
                    </div>
                    <div className="cat-item">
                    <input type="radio" checked={cat === "politics"} name="cat" value="politics" id="politics" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor="cenima">Politics</label>
                    </div>
                    <div className="cat-item">
                    <input type="radio" checked={cat === "design"} name="cat" value="design" id="design" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor="food">Design</label>
                    </div>
                    <div className="cat-item">
                    <input type="radio" checked={cat === "food"} name="cat" value="food" id="food" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor="food">Food</label>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export{Write}