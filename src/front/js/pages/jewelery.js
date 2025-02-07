import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import { VistaModal } from "../component/navbar/FormModal";
import { AllCards } from "../component/allcards";

export const Jewelery = () => {
    const { store} = useContext(Context);

    return (
        <div className="card-container">
            <VistaModal />
            {
                store.jewelery.map(product => (
                    <AllCards image={product.image} title={product.title} category={product.category} price={product.price} rate={product.rating.rate} id={product.id} />
                ))
            }
        </div>
    )
}