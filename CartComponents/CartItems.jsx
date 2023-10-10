import React from "react";

function CartItems(props){
    return(
        <div className="items-count">
            <button className="decr" onClick={props.handleDecrement}>-</button>
            <h1>{props.cart}</h1>
        </div>
    )
}

export{CartItems}