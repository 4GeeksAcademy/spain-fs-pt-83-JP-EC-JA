import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { VistaModal } from "./FormModal";


export const ButtonModal = () => {

    const { store, actions } = useContext(Context);
    const [user, setUser] = useState();
    const [show, setShow] = useState(false);
    const token = localStorage.getItem('token');
    useEffect(() => {
        console.log(token,user)
        if (token && !user) {
            actions.getUser().then(resp => setUser(resp)
            );
        }
    }, [show])



    return (
        <>
            <Link to='' className="nav-link active d-flex" onClick={!token? () => setShow(true):undefined} >
                <i className="bi bi-person"></i>
                {user ? <p className="ps-1">{user.username}</p> : null}
            </Link>
            {show ? <VistaModal onSubmit={() => setShow(false)} /> : null}

        </>
    )
}
