import React, { useContext, useEffect } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";



export const ProductDetail = (product) => {

    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.loadProductDetail(params.id)
    }, [])
    if (!store.productdetail) return null;

    return (
<<<<<<< HEAD

        <div className="detail-card">

            <div className="img-fluid">
=======
        <div className="detail-card m-5 p-5">
            <div className="img-card">
>>>>>>> main
                <img src={store.productdetail.image} className="card-img" alt="..."></img>
            </div>
            <div className="body-text m-5 p-5">
                <h2 className="title">{store.productdetail.title}</h2>
                <p>{store.productdetail.description}</p>
                <strong className="price">{store.productdetail.price}€</strong>
                <h5 className="rating">{store.productdetail.rating.rate}</h5>
                <input type="number" className="number" min="0" max="100" placeholder="0" />
                <Link to="#" className="btn btn-light btn-all">
                    {
                        store.favorites.includes(store.productdetail.id) ?
                            <i onClick={() => actions.removeFavorite(store.productdetail.id)} className="fa-solid fa-heart"></i> :
                            <i onClick={() => actions.addFavorite(store.productdetail.id)} className="bi bi-heart"></i>
                    }
                </Link>
<<<<<<< HEAD
                <Link to="#" className="btn btn-light btn-all">
                    {
                        store.cart.includes(store.productdetail.id) ?
                            <i onClick={() => actions.removeCart(store.productdetail.id)} className="fa-solid fa-cart3"></i> :
                            <i onClick={() => actions.addCart(store.productdetail.id)} className="bi bi-cart3"></i>
                    }

                </Link>

=======
                <a href="#" className="btn btn-light btn-all"><i className="bi bi-cart3"></i></a>
>>>>>>> main
            </div>
        </div>
    )
}

