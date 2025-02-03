import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";

export const Electronics = () => {
    const {store} = useContext(Context);
    console.log(store)
    
    return (
        <div className="card-container">

        {
            store.electronics.map(product => (


                <div className="card-products col-3">
                    <img src={product.image} className="card-img" alt="..." />
                    <div className="card-Shop">
                        <h5 className="card-title">{product.title}</h5>
                        <p>{product.category}</p>
                        <p>{product.rating.rate}</p>
                        <a href="#" className="btn btn-light btn-all">More info</a>
                        <a href="#" className="btn btn-light btn-all"><i className="bi bi-heart"></i></a>
                        <a href="#" className="btn btn-light btn-all"><i className="bi bi-cart3"></i></a>
                    </div>
                </div>


            ))
        }
    </div>
    )
}