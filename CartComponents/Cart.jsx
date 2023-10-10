import React, { useState } from "react";
import img from "./images/biryani/Ambur-Chicken-Biryani.jpg"
import "./cart.css"
import { Link } from "react-router-dom";

function Cart(props){


  
    return(
        <div className="cards">
            <div className="card">
                <img src={img} alt="" />
                <p>Hello this may cart items</p>
                <button onClick={props.handleClick}>Add to cart</button>
            </div>

            <div className="card">
                <img src={img} alt="" />
                <p>Hello this may cart items</p>
                <button onClick={props.handleClick}>Add to cart</button>
            </div>

            <div className="card">
                <img src={img} alt="" />
                <p>Hello this may cart items</p>
                <button onClick={props.handleClick}>Add to cart</button>
            </div>
            <div className="cart-count">
            <h1><Link to="/cart">{props.cart}</Link></h1>
            </div>
        </div>
    )
}

export{Cart}