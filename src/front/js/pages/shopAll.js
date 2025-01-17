import React from "react";
import paisaje1 from "../../img/paisaje1.jpg";
import "../../styles/index.css";

export const ShopAll = () => {
    return(
    <div className=" Card-products m-5 p-3">
        <img className="card-img-top" src={paisaje1} alt="..."/>
        <div className="card-body">
            <h5>PRODUCTO 1</h5>
            <a href="#" className="btn btn-light">More info</a>
            <i className="bi bi-heart"></i> 
            <i className="bi bi-cart3"></i>
        </div>
    </div>
     
     
    )
}