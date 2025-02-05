import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import { Link, useParams, useSearchParams } from "react-router-dom";

export const ProductDetail = () => {


    const { store } = useContext(Context);
    console.log(store)
    
    return (

        <div className="detail-card">

            {
                store.products.map(product => (

                    <div className="detail p-5 m-5">
                        <div className="img-card">
                            <img src={product.image} className="card-img" alt="..."></img>
                        </div>
                        <div className="body-text m-5 p-5">
                            <h5 className="title">{product.title}</h5>
                            <p>{product.description}</p>
                            <p>{product.price}€</p>
                            <h6>{product.rating}</h6>
                            <input type="number" className="number" min="0" max="100" placeholder="0" />
                            <a href="#" className="btn btn-light btn-all"><i className="bi bi-heart"></i></a>
                            <a href="#" className="btn btn-light btn-all"><i className="bi bi-cart3"></i></a>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

