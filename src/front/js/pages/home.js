import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { Jumbotrom } from "../component/jumbotrom";
import { Card } from "../component/card";
import { Carrusel } from "../component/Carrusel";
import { Catergories } from "../component/Categories";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store)
	
	return (
		<>
			<Jumbotrom />
			<Card/>
			<Catergories/>
			<Carrusel/>
		</>
	);
};
