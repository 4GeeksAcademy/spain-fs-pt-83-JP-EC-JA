import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ProductDetail } from "./productdetail";


export const ShopAll = () => {


    const { store } = useContext(Context);
    console.log(store)



    return (

        <div className="card-container">

            {
                store.products.map(product => (


                    <div className="card-products col-3">
                        <img src={product.image} className="card-img" alt="..." />
                        <div className="card-Shop">
                            <h5 className="card-title">{product.title}</h5>
                            <p>{product.category}</p>
                            <p>{product.price}€</p>
                            <h6>{product.rating.rate}</h6>
                            <Link className="btn btn-light btn-all" to={`/detail/${product.id}`}>More info</Link>
                            <a href="#" className="btn btn-light btn-all"><i className="bi bi-heart"></i></a>
                            <a href="#" className="btn btn-light btn-all"><i className="bi bi-cart3"></i></a>
                        </div>
                    </div>


                ))
            }
        </div>
    )
}