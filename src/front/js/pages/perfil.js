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
        <div className="perfil col-6 border border-1 rounded-4 pb-5 shadow">
            <h2 className="text-center py-4">Perfil del usuario</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <img src={avatar} />
                    </div>
                    <div className="col">
                    <table class="table table-borderless table-hover text-uppercase">
                        <tbody>
                            <tr>
                                <th scope="row">Usuario</th>
                                <td>{user.username}</td>
                            </tr>
                            <tr>
                                <th scope="row">Nombre</th>
                                <td>{user.name}</td>
                            </tr>
                            <tr>
                                <th scope="row">Apellido</th>
                                <td colspan="2">{user.lastname}</td>
                            </tr>
                            <tr>
                                <th scope="row">Correo</th>
                                <td colspan="2">{user.email}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>


        </div>
    )
}