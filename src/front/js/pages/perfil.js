import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const Perfil = () => {

    const { store, actions } = useContext(Context);
    const { user } = store;

    if (!user) {
        return null
    }

    return (
        <div className="pt-5 mt-5">
            <h2 className="text-center">Perfil del usuario</h2>

            <div className="card shadow">
                <div className="card-body">
                    <h5 className="card-title">Nombre de Usuario: {user.username}</h5>
                    <p className="card-text">Nombre: {user.name}</p>
                    <p className="card-text">Apellido: {user.lastname}</p>
                    <p className="card-text">Correo: {user.email}</p>
                </div>
            </div>


        </div>
    )
}