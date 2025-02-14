import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonModal } from "./buttonModal";
import { Context } from "../../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [query, setQuery] = useState("");
	const navigate = useNavigate();


	const handleSearch = (e) => {
		setQuery(e.target.value);
		if (e.target.value.trim() !== "") {
			navigate(`/search?query=${e.target.value}`);
		}
	};


	return (
		<>
			<nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary shadow">
				<div className="container-fluid">
					<Link className="navbar-brand ms-4" to="/">Chic & Click</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">


						<div className="col-md-6 offset-md-2 p-1">
							<form className="d-flex" role="search" onSubmit={handleSearch}>
								<input
									className="form-control me-2"
									type="search"
									placeholder="Search for products..."
									aria-label="Search"
									value={query}
									onChange={handleSearch}
								/>
								<button className="btn btn-light" type="submit">Search</button>
							</form>
						</div>

						<ul className="navbar-nav ms-auto me-3 mb-2 mb-lg-0">
							<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									CATEGORIA
								</Link>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" to="/">Home</Link></li>
									<li><Link className="dropdown-item" to="/shopAll">Shop All</Link></li>
									<li><Link className="dropdown-item" to="/jewelery">Jewelery</Link></li>
									<li><Link className="dropdown-item" to="/menclothes">Men's Clothes</Link></li>
									<li><Link className="dropdown-item" to="/womanclothes">Woman's Clothes</Link></li>
									<li><Link className="dropdown-item" to="/electronics">Electronics</Link></li>
								</ul>
							</li>
							<li className="nav-item">
								<ButtonModal />
							</li>
							<li className="nav-item">
								<button onClick={() => navigate("/favorites")} className="nav-link active position-relative" aria-current="page" >
									<i className=" bi bi-heart"></i>
									{
										store.favorites.length === 0 ? ("") : (
											<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-black">
												{(store.favorites.length)}
											</span>
										)
									}
								</button>
							</li>
							<li className="nav-item">
								<button onClick={() => navigate("/cart")} className="nav-link active position-relative" aria-current="page" >
									<i className=" bi bi-cart3"></i>

									{
										store.cart.length === 0 ? ("") : (
											<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-black">
												{(store.cart.length)}
											</span>
										)
									}

								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
