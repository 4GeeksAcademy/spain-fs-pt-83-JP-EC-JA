import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";

export const Cart = () => {
    const { store, actions } = useContext(Context);
    const cartProducts = store.products.filter(product => store.cart.includes(product.id));

    return (
        <div className="cart-container-head text-center">
            <div className="row cols-2 cols-lg-1 row-cart-head">
                <div className="col-12 col-lg-6">
                    <h2>Producto</h2>
                </div>
                <div className="col">
                    <div className="row cols-2  row-cart-characteristics">
                        <div className="col">
                            <h2>Precio</h2>
                        </div>
                        <div className="col">
                            <h2>Accion</h2>
                        </div>
                    </div>
                </div>
            </div>
            {
                cartProducts.length > 0 ? (
                    cartProducts.map(product => (
                        <div className="cart-container-products text-center">
                            <div className="row cols-2 cols-lg-1 row-cart-products">
                                <div className="col-12 col-lg-6">
                                    <div className="row cols-1 cols-lg-2 row-cart-img-title">
                                        <div className="col-12 col-lg-5">
                                            <img src={product.image} className="cart-img" alt="imagenes de los productos" />
                                        </div>
                                        <div className="col-12 col-lg-7 title-cart-img">
                                            <h5>{product.title}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col cart-characteristics">
                                    <div className="row cols-2  row-cart-characteristics">
                                        <div className="col">
                                            <h3>{product.price}€</h3>
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
