import React from "react";
import paisaje1 from "../../img/paisaje1.jpg";
import "../../styles/index.css";

export const ShopAll = () => {
    return (
        <div className="container">
            <div className="row d-flex">

                <div className=" Card-products   col-3">
                    <img className="card-img-top" src={paisaje1} alt="..." />
                    <div className="card-body-all">
                        <h5>PRODUCTO 1</h5>
                        <p>50€</p>
                        <a href="#" className="btn btn-light btn-all">More info</a>
                        <a href="#" className="btn btn-light btn-all"><i className="bi bi-heart"></i></a>
                        <a href="#" className="btn btn-light btn-all"><i className="bi bi-cart3"></i></a>
                    </div>
                </div>

                <div className=" Card-products  col-3">
                    <img className="card-img-top" src={paisaje1} alt="..." />
                    <div className="card-body-all">
                        <h5>PRODUCTO 1</h5>
                        <p>50€</p>
                        <a href="#" className="btn btn-light btn-all">More info</a>
                        <a href="#" className="btn btn-light btn-all"><i className="bi bi-heart"></i></a>
                        <a href="#" className="btn btn-light btn-all"><i className="bi bi-cart3"></i></a>
                    </div>
                </div>

                <div className=" Card-products col-3">
                    <img className="card-img-top" src={paisaje1} alt="..." />
                    <div className="card-body-all">
                        <h5>PRODUCTO 1</h5>
                        <p>50€</p>
                        <a href="#" className="btn btn-light btn-all">More info</a>
                        <a href="#" className="btn btn-light btn-all"><i className="bi bi-heart"></i></a>
                        <a href="#" className="btn btn-light btn-all"><i className="bi bi-cart3"></i></a>
                    </div>
                </div>

                <div className=" Card-products m-3 p-2 col-3">
                    <img className="card-img-top" src={paisaje1} alt="..." />
                    <div className="card-body-all">
                        <h5>PRODUCTO 1</h5>
                        <p>50€</p>
                        <a href="#" className="btn btn-light btn-all">More info</a>
                        <a href="#" className="btn btn-light btn-all"><i className="bi bi-heart"></i></a>
                        <a href="#" className="btn btn-light btn-all"><i className="bi bi-cart3"></i></a>
                    </div>
                </div>
            </div>

        </div>



    )
}