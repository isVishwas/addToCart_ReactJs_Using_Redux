import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";

const Cart = (props) => {
 
    return (
        <div className="container border text-light bg-dark rounded" style={{width:"100px",float:"right"}} >
        <span variant="danger"><AiOutlineShoppingCart size="47px"/>{props.numberOfItems>0 ? <span className="bg-primary p-1 rounded text-light">{props.numberOfItems}</span>:null}</span>
        
        </div>
    )
}

export default Cart
