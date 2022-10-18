import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Home = () => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		fetchCountries();
	}, []);

	const fetchCountries = async () => {
		const response = await axios.get(
			"https://countriesnow.space/api/v0.1/countries"
		);
		const data = await response.data;

		setCountries(data.data);
	};

	return (
		<>
			{countries.map(({ country }) => (
				<CountryCard country={country} />
			))}
		</>
	);
};

export default Home;
