import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Favorites = () => {
    const { store, actions } = useContext(Context);
    const favoriteProducts = store.products.filter(product => store.favorites.includes(product.id));

    return (
        <div className="card-container">
            <div className="row justify-content-center">
                {favoriteProducts.length > 0 ? (
                    favoriteProducts.map(product => (
                        <div key={product.id} className="card border-1 shadow px-5 py-2 text-center">
                            <img src={product.image} className="card-img-top" alt="imagenes de los productos" />
                            <div className="card-body p-1 m-1">
                                <h5 className="card-title">{product.title}</h5>
                                <p>{product.category}</p>
                                <p>{product.rating.rate}</p>
                            </div>
                            <div className="card-footer bg-white border-0">
                                <Link className="btn btn-light" to={`/detail/${product.id}`}>More info.</Link>
                                <Link to="" className="btn btn-light" onClick={() => actions.removeFavorite(product.id)}>
                                    <i className="fa-solid fa-heart"></i>
                                </Link>
                                <Link to='' className="btn btn-light">
                                    {
                                        store.cart.includes(product.id) ?
                                            <i onClick={() => actions.removeCart(product.id)} className="bi bi-cart-fill"></i> :
                                            <i onClick={() => actions.addCart(product.id)} className="bi bi-cart3"></i>
                                    }
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-favorites">
                        <p>No tienes nada en favoritos.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
