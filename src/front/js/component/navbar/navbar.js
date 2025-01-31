import React from "react";
import { shopAll } from "../../pages/shopAll";
import { Link } from "react-router-dom";
import { ButtonModal } from "./buttonModal";
import { VistaModal } from "./FormModal";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary shadow">
				<div className="container-fluid">
					<Link className="navbar-brand" to='/'>Nombre de la tienda</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">

						<div className="col-md-6 offset-md-2 p-1">
							<form className="d-flex" role="search">
								<input className="form-control me-2" type="search" placeholder="Search for category" aria-label="Search" />
								<button className="btn btn-outline-success" type="submit">Search</button>
							</form>
						</div>

						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									CATEGORIA
								</a>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" to='/'>Home</Link></li>
									<li><Link className="dropdown-item" to='/shopAll'>Shop All</Link></li>
									<li><Link className="dropdown-item" to='/jewelery'>Jewelery</Link></li>
									<li><Link className="dropdown-item" to='/menclothes'>Men's Clothes</Link></li>
									<li><Link className="dropdown-item" to='/womanclothes'>Woman's Clothes</Link></li>
									<li><Link className="dropdown-item" to='/electronics'>Electronics</Link></li>
								</ul>
							</li>
							<li className="nav-item">
								<ButtonModal />
							</li>
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									<i className="bi bi-heart"></i>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									<i className="bi bi-cart3"></i>
								</a>
							</li>
							<li className="nav-item">
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
