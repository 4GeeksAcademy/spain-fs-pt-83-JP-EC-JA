import React from "react";
import jumbo1 from "../../img/jumbo1.jpg";
import jumbo2 from "../../img/jumbo2.jpg";
import jumbo3 from "../../img/jumbo3.jpg";

export const Jumbotrom = () => {
    return (
        <div className="text-center jumbo">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="4000">
                        <img src={jumbo1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block text-end">
                            <button type="button" className="btn btn-light">Details</button>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src={jumbo2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block text-end">
                            <button type="button" className="btn btn-light">Details</button>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src={jumbo3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block text-end">
                            <button type="button" className="btn btn-light">Details</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}