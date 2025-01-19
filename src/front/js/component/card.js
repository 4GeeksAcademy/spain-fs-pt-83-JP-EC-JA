import React from "react";
import rigo from "../../img/rigo-baby.jpg"

export const Card = () => {
    return (
        <div className="container my-5 py-5">
            <h4 className="text-uppercase text-center p-3">
                Ultimas Tendencias
            </h4>
            <ul className="nav justify-content-center nav-underline" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                        Todos
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                        Joyas
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                        Reloj
                    </button>

                </li>
            </ul>
            <div className="tab-content text-center cartas-menu" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
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
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
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
                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
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