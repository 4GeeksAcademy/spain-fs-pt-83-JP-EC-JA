import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { VistaModal } from "./FormModal";

export const ButtonModal = () => {
    const { store, actions } = useContext(Context);
    const [user, setUser] = useState(null);
    const [show, setShow] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token && !user) {
            actions.getUser().then(resp => setUser(resp));
        }
    }, [token, show]);

    const handleLogout = () => {
        actions.handlerLogout(); // Llama a la función correcta
        setUser(null);
        setShow(false);
    };
    
    
    return (
        <>
            {user ? (
                <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                        <i className="bi bi-person"></i> {user.username}
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <Link className="dropdown-item" to="/profile">Perfil</Link>
                        </li>
                        <li>
                            <button className="dropdown-item" onClick={handleLogout}>
                                Cerrar sesión
                            </button>
                        </li>
                    </ul>
                </div>
            ) : (
                <Link to="" className="nav-link active d-flex" onClick={() => setShow(true)}>
                    <i className="bi bi-person"></i>
                </Link>
            )}
            {show && <VistaModal onSubmit={() => setShow(false)} />}
        </>
    );
};
