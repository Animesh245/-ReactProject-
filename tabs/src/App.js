import React, { useState, useEffect } from 'react';
const url = 'https://course-api.com/react-tabs-project';

function App() {
	const [ loading, setLoading ] = useState(true);
	const [ jobs, setJobs ] = useState([]);
	const [ value, setValue ] = useState(0);

	const fetchJobs = async () => {
		const response = await fetch(url);
		const newJobs = await response.json();
		console.log(newJobs);
		setJobs(newJobs);
		setLoading(false);
	};

	useEffect(() => {
		fetchJobs();
	}, []);

	if (loading) {
		return (
			<section>
				<div>
					<h1>loading...</h1>
				</div>
			</section>
		);
	}
	const { title, dates, duties, company } = jobs[value];
	return (
		<main>
			<section>
				<div>
					<h2>Experience</h2>
				</div>
				<div>
					{jobs.map((item, index) => {
						return (
							<button key={item.id} onClick={() => setValue(index)}>
								{item.company}
							</button>
						);
					})}
				</div>
				<div>
					<article>
						<h3>{title}</h3>
						<h4>{dates}</h4>
					</article>
					<div>
						{duties.map((duty, index) => {
							return <p key={index}> {`>> ` + duty}</p>;
						})}
					</div>
				</div>
			</section>
		</main>
	);
}

export default App;
