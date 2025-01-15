import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { Jumbotrom } from "../component/jumbotrom";
import { Card } from "../component/card";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Jumbotrom />
			<Card/>
		</>
	);
};
