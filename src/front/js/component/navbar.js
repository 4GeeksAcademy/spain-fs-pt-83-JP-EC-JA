import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link to={'/'} className="navbar-brand">Nombre de la tienda</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					
					<div className="col-md-6 offset-md-2 p-1">
						<form className="d-flex" role="search">
							<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn btn-outline-success" type="submit">Search</button>
						</form>
					</div>
					
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								CATEGORIA
							</a>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">CATEROGIA 1</a></li>
								<li><Link to={'/shirt'}>Camisas</Link></li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								<i className="bi bi-person"></i>
							</a>
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
					</ul>
				</div>
			</div>
		</nav>
	);
};
