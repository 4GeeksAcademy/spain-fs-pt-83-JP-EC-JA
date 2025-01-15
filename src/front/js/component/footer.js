import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-5 p-0 text-center">

		<div className="container-fluid">
			<div className="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3">
				<div className="col px-3 py-2">
					<h5 className="text-uppercase text-primary">nosotros</h5>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum exercitationem quas, distinctio reiciendis quisquam, vel eligendi quae aut esse, quasi ipsa sit neque tempore dignissimos hic ut ad! Recusandae, iusto.
					</p>
				</div>

				<div className="col px-3 py-2">
					<h5 className="text-uppercase text-primary">politica</h5>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum exercitationem quas, distinctio reiciendis quisquam, vel eligendi quae aut esse, quasi ipsa sit neque tempore dignissimos hic ut ad! Recusandae, iusto.
					</p>
				</div>

				<div className="col px-3 py-2">
					<h5 className="text-uppercase text-primary">contactanos</h5>
					<p>
						<i class="bi bi-envelope"></i> test@test.com
					</p>
					<p>
						<i class="bi bi-telephone"></i> +34 000 00 00
					</p>
				</div>
			</div>
		</div>


		<hr></hr>
		<p>
			Copyright Todos los Derechos Reservados
		</p>
		<i class="bi bi-facebook"></i>
		<i class="bi bi-instagram"></i>
		<i class="bi bi-twitter-x"></i>
		<i class="bi bi-youtube"></i>
	</footer>
);
