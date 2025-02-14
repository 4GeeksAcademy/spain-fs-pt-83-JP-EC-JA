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
        <div className="container-details">
            <div className="row cols-1 cols-md-2 row-details">
                <div className="col-12 col-md-4 ">
                    <img src={store.productdetail.image} className="details-img" alt="..."></img>
                </div>
                <div className="col-12 col-md-8">
                    <h2 className="title">{store.productdetail.title}</h2>
                    <p>{store.productdetail.description}</p>
                    <strong className="price">{store.productdetail.price}€</strong>
                    <h5 className="rating">{store.productdetail.rating.rate}</h5>
                    <Link to="#" className="btn btn-light btn-all">
                        {
                            store.favorites.includes(store.productdetail.id) ?
                                <i onClick={() => actions.removeFavorite(store.productdetail.id)} className="fa-solid fa-heart"></i> :
                                <i onClick={() => actions.addFavorite(store.productdetail.id)} className="bi bi-heart"></i>
                        }
                    </Link>
                    <Link to='' className="btn btn-light btn-all">
                        {
                            store.cart.includes(store.productdetail.id) ?
                                <i onClick={() => actions.removeCart(store.productdetail.id)} className="bi bi-cart-fill"></i> :
                                <i onClick={() => actions.addCart(store.productdetail.id)} className="bi bi-cart3"></i>
                        }
                    </Link>
                </div>
            </div>
        </div>
    )
}
