import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const AllCards = ({ image, title, category, price, rate, id }) => {

    const { store, actions } = useContext(Context);
    console.log(store)
    return (


        <div className="card border-1 shadow py-2 text-center">
            <img src={image} className="card-img-top" alt="imagenes de los productos" />
            <div className="card-body p-0 m-0">
                <div>
                    <h5 className="cards-titles">{title}</h5>
                </div>                
                <p>{category}</p>
                <p>{price}€</p>
                <h6>{rate}</h6>
            </div>
            <div className="card-footer bg-white border-0">
                <Link className="btn btn-light" to={`/detail/${id}`}>More info.</Link>
                <Link to='' className="btn btn-light">
                    {
                        store.favorites.includes(id) ?
                            <i onClick={() => actions.removeFavorite(id)} className="fa-solid fa-heart"></i> :
                            <i onClick={() => actions.addFavorite(id)} className="bi bi-heart"></i>
                    }
                </Link>
                <Link to='' className="btn btn-light">
                    {
                        store.cart.includes(id) ?
                            <i onClick={() => actions.removeCart(id)} className="bi bi-cart-fill"></i> :
                            <i onClick={() => actions.addCart(id)} className="bi bi-cart3"></i>
                    }
                </Link>
            </div>
        </div>
    )
}