import { Card } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CountryCard = ({ country }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		console.log(country);
		navigate(`/weather/${country}`);
	};

	return (
		<Card
			variant="outlined"
			onClick={handleClick}
			style={{ cursor: "pointer" }}
		>
			<h1>{country}</h1>
		</Card>
	);
};

export default CountryCard;
