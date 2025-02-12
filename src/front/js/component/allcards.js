import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const AllCards = ({ image, title, category, price, rate, id, }) => {

    const { store, actions } = useContext(Context);

    return (

        <div className="card-products col-3">
            <img src={image} className="card-img" alt="..." />
            <div className="card-Shop">
                <h5 className="card-title">{title}</h5>
                <p>{category}</p>
                <p>{price}€</p>
                <h6>{rate}</h6>
                <Link className="btn btn-light btn-all" to={`/detail/${id}`}>More info</Link>
                <Link to='' className="btn btn-light btn-all">
                    {
                        store.favorites.includes(id) ?
                            <i onClick={() => actions.removeFavorite(id)} className="fa-solid fa-heart"></i> :
                            <i onClick={() => actions.addFavorite(id)} className="bi bi-heart"></i>
                    }
                </Link>
                <Link to="#" className="btn btn-light btn-all">
                    {
                        store.cart.includes(id) ?
                            <i onClick={() => actions.removeCart(store.productdetail.id)} className="fa-solid fa-cart3"></i> :
                            <i onClick={() => actions.addCart(store.productdetail.id)} className="bi bi-cart3"></i>
                    }

                </Link>

            </div>
        </div>
    )
}