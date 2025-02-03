import React from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";

export const Favorites = () => {
    const {store} = useContext(Context);
        console.log(store)

    return (
        <>
            <Jumbotrom />
			<VistaModal />
            <h1>Favoritos</h1>
            <Carrusel />
        </>
    );
}