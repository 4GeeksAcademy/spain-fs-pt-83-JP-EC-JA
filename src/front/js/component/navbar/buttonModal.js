import React from "react";
import { Link } from "react-router-dom";


export const ButtonModal = () => {



    return (
        <>
            <Link to='' className="nav-link active" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="bi bi-person"></i>
            </Link>
        </>
    )
}