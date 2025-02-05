import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import { VistaModal } from "../component/navbar/FormModal";

export const Electronics = () => {
    const {store, actions} = useContext(Context);
    console.log(store)
    
    return (
        <div className="card-container">
            <VistaModal />

        {            
            store.electronics.map(product => (


                <div className="card-products col-3">
                    <img src={product.image} className="card-img" alt="..." />
                    <div className="card-Shop">
                        <h5 className="card-title">{product.title}</h5>
                        <p>{product.category}</p>
                        <p>{product.price}€</p>
                        <p>{product.rating.rate}</p>
                        <a href="#" className="btn btn-light btn-all" to={`/detail/${product.id}`}>More info</a>
                        <a href="#" className="btn btn-light btn-all"><i className="bi bi-heart"></i></a>
                        <a href="#" className="btn btn-light btn-all">More info</a>
                        <a href="#" className="btn btn-light btn-all">
                                {
                                    store.favorites.includes(product.id) ?
                                        <i onClick={() => actions.removeFavorite(product.id)} className="fa-solid fa-heart"></i> :
                                        <i onClick={() => actions.addFavorite(product.id)} className="bi bi-heart"></i>
                                }
                            </a>
                        <a href="#" className="btn btn-light btn-all"><i className="bi bi-cart3"></i></a>
                    </div>
                </div>


            ))
        }
    </div>
    )
}