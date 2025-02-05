import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";


export const ProductDetail = () => {


    const { store } = useContext(Context);
    console.log(store)

    return (

        <div className="detail-card m-5 p-5">

            {
                store.productdetail.map(product => (

                    <div className="detail">
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

