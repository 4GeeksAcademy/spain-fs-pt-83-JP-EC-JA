import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { TendenciaMen } from "../tendencia-home/tendenciaMen";
import { TendenciaJewelery } from "../tendencia-home/tendenciaJewelery";


export const Card = () => {
    const { store } = useContext(Context);
    return (
        <div className="container-fluid my-5 py-5 tendencia">
            <h4 className="text-uppercase text-center p-3">
                Ultimas Tendencias
            </h4>
            <ul className="nav justify-content-center nav-underline" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="Jewelery-tab" data-bs-toggle="tab" data-bs-target="#Jewelery-tab-pane" type="button" role="tab" aria-controls="Jewelery-tab-pane" aria-selected="true">
                        Jewelery
                    </button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="men-tab" data-bs-toggle="tab" data-bs-target="#men-tab-pane" type="button" role="tab" aria-controls="men-tab-pane" aria-selected="false">
                        men's clothing
                    </button>
                </li>
            </ul>
            <div className="tab-content text-center cartas-menu" id="myTabContent">
                <div className="tab-pane fade show active" id="Jewelery-tab-pane" role="tabpanel" aria-labelledby="Jewelery-tab" tabindex="0">
                    <div className="row justify-content-center">
                        <TendenciaJewelery />
                    </div>
                </div>


                <div className="tab-pane fade" id="men-tab-pane" role="tabpanel" aria-labelledby="men-tab" tabindex="0">
                    <div className="row justify-content-center">
                        <TendenciaMen />
                    </div>
                </div>


            </div>
        </div>
    )
}