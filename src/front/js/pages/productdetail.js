import React, { useContext, useEffect } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";



export const ProductDetail = () => {

    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(store)
    console.log(params)

    useEffect(() => {
        actions.loadProductDetail(params.id)
    }, [])
    if (!store.productdetail) return null;

    return (

        <div className="detail-card m-5 p-5">

            <div className="img-card">
                <img src={store.productdetail.image} className="card-img" alt="..."></img>
            </div>
            <div className="body-text m-5 p-5">
                <h5 className="title">{store.productdetail.title}</h5>
                <p>{store.productdetail.description}</p>
                <p>{store.productdetail.price}€</p>
                <h6>{store.productdetail.rating.rate}</h6>
                <input type="number" className="number" min="0" max="100" placeholder="0" />
                <a href="#" className="btn btn-light btn-all">
                    {
                        store.favorites.includes(store.productdetail.id) ?
                            <i onClick={() => actions.removeFavorite(store.productdetail.id)} className="fa-solid fa-heart"></i> :
                            <i onClick={() => actions.addFavorite(store.productdetail.id)} className="bi bi-heart"></i>
                    }
                </a>
                <a href="#" className="btn btn-light btn-all"><i className="bi bi-cart3"></i></a>

            </div>




        </div>
    )
}

