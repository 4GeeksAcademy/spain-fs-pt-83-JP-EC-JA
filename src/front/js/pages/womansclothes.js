import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import { AllCards } from "../component/allcards";

export const WomanClothes = () => {
    const { store} = useContext(Context);

    return (
        <div className="card-container">
            
            {
                store.woman.map(product => (
                    <AllCards image={product.image} title={product.title} category={product.category} price={product.price} rate={product.rating.rate} id={product.id} />
                ))
            }
        </div>
    )
}