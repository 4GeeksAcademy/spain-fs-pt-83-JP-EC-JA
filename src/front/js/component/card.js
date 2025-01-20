import React from "react";
import rigo from "../../img/rigo-baby.jpg"

export const Card = () => {
    return (
        <div className="container-fluid my-5 py-5 tendencia">
            <h4 className="text-uppercase text-center p-3">
                Ultimas Tendencias
            </h4>
            <ul className="nav justify-content-center nav-underline" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="electronics-tab" data-bs-toggle="tab" data-bs-target="#electronics-tab-pane" type="button" role="tab" aria-controls="electronics-tab-pane" aria-selected="true">
                        Electronics
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="jewelery-tab" data-bs-toggle="tab" data-bs-target="#jewelery-tab-pane" type="button" role="tab" aria-controls="jewelery-tab-pane" aria-selected="false">
                        Jewelery
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="men-tab" data-bs-toggle="tab" data-bs-target="#men-tab-pane" type="button" role="tab" aria-controls="men-tab-pane" aria-selected="false">
                        men's clothing
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="women-tab" data-bs-toggle="tab" data-bs-target="#women-tab-pane" type="button" role="tab" aria-controls="women-tab-pane" aria-selected="false">
                        women's clothing
                    </button>
                </li>
            </ul>
            <div className="tab-content text-center cartas-menu" id="myTabContent">
                <div className="tab-pane fade show active" id="electronics-tab-pane" role="tabpanel" aria-labelledby="electronics-tab" tabindex="0">
                    <div className="row justify-content-center">
                        <div className="card shadow">
                            <img src={rigo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-outline-danger rounded rounded-1">
                                    <i className="bi bi-heart"></i>
                                </button>
                                <button className="btn btn-outline-success rounded rounded-1">
                                    <i className="bi bi-cart3"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card shadow">
                            <img src={rigo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-outline-danger rounded rounded-1">
                                    <i className="bi bi-heart"></i>
                                </button>
                                <button className="btn btn-outline-success rounded rounded-1">
                                    <i className="bi bi-cart3"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card shadow">
                            <img src={rigo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-outline-danger rounded rounded-1">
                                    <i className="bi bi-heart"></i>
                                </button>
                                <button className="btn btn-outline-success rounded rounded-1">
                                    <i className="bi bi-cart3"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="tab-pane fade" id="jewelery-tab-pane" role="tabpanel" aria-labelledby="jewelery-tab" tabindex="0">
                    <div className="row justify-content-center">
                        <div className="card shadow">
                            <img src={rigo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-outline-danger rounded rounded-1">
                                    <i className="bi bi-heart"></i>
                                </button>
                                <button className="btn btn-outline-success rounded rounded-1">
                                    <i className="bi bi-cart3"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card shadow">
                            <img src={rigo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-outline-danger rounded rounded-1">
                                    <i className="bi bi-heart"></i>
                                </button>
                                <button className="btn btn-outline-success rounded rounded-1">
                                    <i className="bi bi-cart3"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card shadow">
                            <img src={rigo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-outline-danger rounded rounded-1">
                                    <i className="bi bi-heart"></i>
                                </button>
                                <button className="btn btn-outline-success rounded rounded-1">
                                    <i className="bi bi-cart3"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="tab-pane fade" id="men-tab-pane" role="tabpanel" aria-labelledby="men-tab" tabindex="0">
                    <div className="row justify-content-center">
                        <div className="card shadow">
                            <img src={rigo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-outline-danger rounded rounded-1">
                                    <i className="bi bi-heart"></i>
                                </button>
                                <button className="btn btn-outline-success rounded rounded-1">
                                    <i className="bi bi-cart3"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card shadow">
                            <img src={rigo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-outline-danger rounded rounded-1">
                                    <i className="bi bi-heart"></i>
                                </button>
                                <button className="btn btn-outline-success rounded rounded-1">
                                    <i className="bi bi-cart3"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card shadow">
                            <img src={rigo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-outline-danger rounded rounded-1">
                                    <i className="bi bi-heart"></i>
                                </button>
                                <button className="btn btn-outline-success rounded rounded-1">
                                    <i className="bi bi-cart3"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}