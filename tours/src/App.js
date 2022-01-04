import Tours from './Tours';
import Loading from './Loading';
import React, { useState, useEffect } from 'react';

const url = 'https://course-api.com/react-tours-project';

function App() {
	const [ loading, setLoading ] = useState(true);
	const [ tours, setTours ] = useState([]);

	const removeTour = (id) => {
		let newTour = tours.filter((tour) => tour.id !== id);
		setTours(newTour);
	};

	const fetchTours = async () => {
		setLoading(true);

		try {
			const response = await fetch(url);
			const tours = await response.json();
			setLoading(false);
			setTours(tours);
			console.log(tours);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTours();
	}, []);

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}
	if (tours.length === 0) {
		return (
			<main>
				<div className="title">
					<h2>no more tours left</h2>
					<button className="btn" onClick={() => fetchTours()}>
						refresh
					</button>
				</div>
			</main>
		);
	}

	return (
		<section>
			<Tours tours={tours} removeTour={removeTour} />
		</section>
	);
}

export default App;
