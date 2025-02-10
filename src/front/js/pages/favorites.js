import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import { VistaModal } from "../component/navbar/FormModal";
import { Link } from "react-router-dom";

export const Favorites = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card-container">

            {
                store.products.map(product => (
                    store.favorites.includes(product.id) ?
                        <div className="card-products col-3">
                            <img src={product.image} className="card-img" alt="..." />
                            <div className="card-Shop">
                                <h5 className="card-title">{product.title}</h5>
                                <p>{product.category}</p>
                                <p>{product.rating.rate}</p>
                                <a href="#" className="btn btn-light btn-all" to={`/detail/${product.id}`}>More info</a>
                                <Link to="#" className="btn btn-light btn-all">
                                    {
                                        store.favorites.includes(product.id) ?
                                            <i onClick={() => actions.removeFavorite(product.id)} className="fa-solid fa-heart"></i> :
                                            <i onClick={() => actions.addFavorite(product.id)} className="bi bi-heart"></i>
                                    }
                                </Link>
                                <Link to="#" className="btn btn-light btn-all">
                                    <i className="bi bi-cart3"></i>
                                </Link>
                            </div>
                        </div> :
                        <></>
                ))
            }
        </div>
    );
}