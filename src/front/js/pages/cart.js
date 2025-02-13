import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";

export const Cart = () => {
    const { store, actions } = useContext(Context);
    const cartProducts = store.products.filter(product => store.cart.includes(product.id));    

    return (
        <div className="cart-container text-center">
            <div className="row row-cart-head">
                <div className="col-4">
                    <h2>Producto</h2>
                </div>
                <div className="col-2">
                    <h2>precio</h2>
                </div>
                <div className="col-2">
                    <h2>Cantidad</h2>
                </div>
                <div className="col-2">
                    <h2>Total</h2>
                </div>
                <div className="col-2">
                    <h2>Accion</h2>
                </div>
            </div>
            {cartProducts.length > 0 ? (
                cartProducts.map(product => (             
                    <div key={product.id} className="row row-cart cols-1 cols-md-2 cols-lg-5">                       
                        <div className="col-4 d-flex align-items-center">
                            <img src={product.image} className="cart-img" alt="imagenes de los productos" />                     
                            <div className="title-cart-img">
                                <h5>{product.title}</h5>                                
                            </div> 
                        </div>
                        <div className="col">
                            <h3>{product.price}€</h3>
                        </div>
                        <div className="col">
                            <h1>Cantidad</h1>
                        </div>
                        <div className="col">
                            <h1>Total</h1>
                        </div>
                        <div className="col">
                            <button className="btn btn-light btn-all" onClick={() => actions.removeCart(product.id)}>
                                <i class="bi bi-trash3"></i>
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="no-cart">
                    <p>Tu carrito está vacío</p>
                </div>
            )}
        </div>
    );
};
