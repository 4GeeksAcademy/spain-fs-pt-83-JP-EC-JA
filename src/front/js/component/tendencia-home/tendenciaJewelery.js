import React, { useContext } from "react";
import { Context } from "../../store/appContext";



export const TendenciaJewelery = () => {

    const { store } = useContext(Context);
    
    return (
        <>
            {
                store.jewelery.map(product => (


                    <div className="card shadow jewelery">
                        <img src={product.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.category}</p>
                            <p className="card-text">{product.rating.rate}</p>
                            <button className="btn btn-light rounded rounded-1">
                                <i className="bi bi-heart"></i>
                            </button>
                            <button className="btn btn-light rounded rounded-1">
                                <i className="bi bi-cart3"></i>
                            </button>
                        </div>
                    </div>


                ))
            }
        </>
    )
}