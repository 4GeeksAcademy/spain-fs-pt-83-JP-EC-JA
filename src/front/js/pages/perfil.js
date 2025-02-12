import React, { useContext } from "react";
import { Context } from "../store/appContext";
import avatar from "../../img/avatar.png"

export const Perfil = () => {

    const { store, actions } = useContext(Context);
    const { user } = store;

    if (!user) {
        return null
    }

    return (
        <div className="perfil text-center border border-1 rounded-4 shadow">
            <h2 className="text-center">Perfil del usuario</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <img src={avatar} />
                    </div>
                    <div className="col">
                        <h5 className="card-title">Nombre de Usuario: {user.username}</h5>
                        <p className="card-text">Nombre: {user.name}</p>
                        <p className="card-text">Apellido: {user.lastname}</p>
                        <p className="card-text">Correo: {user.email}</p>
                    </div>

                </div>
            </div>


        </div>
    )
}