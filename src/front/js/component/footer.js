import React from "react";

export const Footer = () => (
	<footer className="footer my-4 text-center border-2 border-top border-info-subtle pt-3">

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
						<i className="bi bi-envelope"></i> test@test.com
					</p>
					<p>
						<i className="bi bi-telephone"></i> +34 000 00 00
					</p>
				</div>
			</div>
		</div>


		<hr className="border-2 border-info"></hr>
		<p>
			Copyright Todos los Derechos Reservados
		</p>
		<i className="bi bi-facebook"></i>
		<i className="bi bi-instagram"></i>
		<i className="bi bi-twitter-x"></i>
		<i className="bi bi-youtube"></i>
	</footer>
);
