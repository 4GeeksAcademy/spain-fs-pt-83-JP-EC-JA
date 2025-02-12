import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Cart = () => {
    const { store, actions } = useContext(Context);
    const cartProducts = store.products.filter(product => store.cart.includes(product.id));

    return (
        <div className="card-container">
            <div className="row justify-content-center">
                {cartProducts.length > 0 ? (
                    cartProducts.map(product => (
                        <div key={product.id} className="card border-1 shadow px-5 py-2 text-center">
                            <img src={product.image} className="card-img-top" alt="imagenes de los productos" />
                            <div className="card-body p-1 m-1">
                                <h5 className="card-title">{product.title}</h5>
                                <p>{product.category}</p>
                                <p>{product.rating.rate}</p>
                            </div>
                            <div className="card-footer d-flex bg-white border-0">
                                <Link className="btn btn-light" to={`/detail/${product.id}`}>More info</Link>
                                <Link className="btn btn-light" to="/">
                                    <i onClick={() => actions.addFavorite(id)} className="bi bi-heart"></i>
                                </Link>
                                <button className="btn btn-light btn-all" onClick={() => actions.removeCart(product.id)}>
                                    <i className="bi bi-cart3"></i>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-favorites">
                        <p>Tu carrito está vacío</p>
                    </div>
                )}
            </div>
        </div>
    );
};
