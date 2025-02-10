import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { Jumbotrom } from "../component/jumbotrom";
import { Card } from "../component/card-home/card";
import { Carrusel } from "../component/carrusel-home/Carrusel";
import { Catergories } from "../component/categoria-home/Categories";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Jumbotrom />
			<Card />
			<Catergories />
			<Carrusel />
		</>
	);
};
