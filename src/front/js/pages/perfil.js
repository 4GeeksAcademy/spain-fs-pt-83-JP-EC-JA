import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const Perfil = () => {

    const { store, actions } = useContext(Context);
    const {user} = store;
    
    if (!user){
        return null
    }

    return (
        <div className="pt-5 mt-5">
            <h2 className="text-center">Perfil del usuario</h2>

            <div class="card shadow">
                <div class="card-body">
                    <h5 class="card-title">Nombre de Usuario: {user.username}</h5>
                    <p class="card-text">Nombre: {user.name}</p>
                    <p class="card-text">Apellido: {user.lastname}</p>
                    <p class="card-text">Correo: {user.email}</p>
                </div>
            </div>


        </div>
    )
}