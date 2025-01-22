import React, { useContext } from "react";
import { Context } from "../store/appContext";



export const TendenciaMen = () => {

    const { store } = useContext(Context);
    console.log(store)



    return (
        <>
            {
                store.men.map(product => (

                    
                        <div className="card shadow men">
                            <img src={product.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.category}</p>
                                <p className="card-text">{product.rating.count}</p>
                                <button className="btn btn-outline-danger rounded rounded-1">
                                    <i className="bi bi-heart"></i>
                                </button>
                                <button className="btn btn-outline-success rounded rounded-1">
                                    <i className="bi bi-cart3"></i>
                                </button>
                            </div>
                        </div>
                  

                ))
            }
        </>
    )
}