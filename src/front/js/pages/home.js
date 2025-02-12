import React, { useContext } from "react";
import { Context } from "../store/appContext";
import paisaje1 from "../../img/paisaje1.jpg";
import paisaje2 from "../../img/paisaje2.jpg";
import paisaje3 from "../../img/paisaje3.jpg";
import "../../styles/index.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="text-center">
			<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ridze="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="4000">
						<img src={paisaje1} className="d-block w-100" alt="..." style={{ width: "100vw", height: "500px" }} />
						<div className="carousel-caption d-none d-md-block text-end">
							<button type="button" className="btn btn-light">Details</button>
						</div>
					</div>
					<div className="carousel-item" data-bs-interval="4000">
						<img src={paisaje2} className="d-block w-100" alt="..." style={{ width: "100vw", height: "500px" }} />
						<div className="carousel-caption d-none d-md-block text-end">
							<button type="button" className="btn btn-light">Details</button>
						</div>
					</div>
					<div className="carousel-item" data-bs-interval="4000">
						<img src={paisaje3} className="d-block w-100" alt="..." style={{ width: "100vw", height: "500px" }} />
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

	);
};
