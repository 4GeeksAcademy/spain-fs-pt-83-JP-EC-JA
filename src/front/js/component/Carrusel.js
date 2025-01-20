import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const Carrusel = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid my-5 pb-5">
            <div className="carrusel">
                <div className="wrap">
                    {
                        store.products.map(product => (
                            <img key={product.id} src={product.image} alt="Imagen de los prductos" />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}