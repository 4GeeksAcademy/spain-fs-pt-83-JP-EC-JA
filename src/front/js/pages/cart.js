import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Cart = () => {
    const { store, actions } = useContext(Context);
    const cartProducts = store.products.filter(product => store.cart.includes(product.id));
    const count = 5;

    return (
        <div className="cart-container-head text-center">
            <div className="row row-cart-head">
                <div className="col-12 col-md-6">
                    <h2>Producto</h2>
                </div>
                <div className="col">
                    <h2>precio</h2>
                </div>
                <div className="col">
                    <h2>Cantidad</h2>
                </div>
                <div className="col">
                    <h2>Total</h2>
                </div>
                <div className="col">
                    <h2>Accion</h2>
                </div>
            </div>
            {
                cartProducts.length > 0 ? (
                    cartProducts.map(product => (
                        <div className="cart-container-products text-center">
                            <div key={product.id} className="row cols-2 cols-md-1 row-cart-products">
                                <div className="col-12 col-md-6">
                                    <div className="row cols-1 cols-md-2 row-cart-img-title">
                                        <div className="col-12 col-md-4">
                                            <img src={product.image} className="cart-img" alt="imagenes de los productos" />
                                        </div>
                                        <div className="col-12 col-md-8 title-cart-img">
                                            <h5>{product.title}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col cart-characteristics">
                                    <div className="row cols-4  row-cart-characteristics">
                                        <div className="col">
                                            <h3>{product.price}€</h3>
                                        </div>
                                        <div className="col col-cart-count">
                                            <input type="number" name="count" min="1" max="99" />
                                        </div>
                                        <div className="col">
                                            <h3>{count}</h3>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-light btn-all" onClick={() => actions.removeCart(product.id)}>
                                                <i className="bi bi-trash3"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) :
                    (
                        <div className="no-cart">
                            <p>Tu carrito está vacío</p>
                        </div>
                    )
            }
        </div>
    );
};
