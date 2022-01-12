import React, { useState, useEffect } from 'react';
import data from './data';
import { AiFillRightSquare, AiFillLeftSquare } from 'react-icons/ai';

function App() {
	const [ people, setPeople ] = useState(data);
	const [ index, setIndex ] = useState(0);

	const checkPerson = (number) => {
		if (number > people.length - 1) {
			return 0;
		} else if (number < 0) {
			return people.length - 1;
		}
		return number;
	};

	const prevPerson = () => {
		const newIndex = index - 1;
		setIndex(checkPerson(newIndex));
	};

	const nextPerson = () => {
		let newIndex = index + 1;
		setIndex(checkPerson(newIndex));
	};

	useEffect(
		() => {
			let timer = setTimeout(() => {
				nextPerson();
				console.log(index);
			}, 3000);
			return () => clearTimeout(timer);
		},
		[ index ]
	);

	const { id, image, name, title, quote } = people[index];
	return (
		<section>
			{
				<div key={id}>
					<img src={image} alt={name} width="140" height="180" />
					<h2>{name}</h2>
					<h4>{title}</h4>
					<p>{quote}</p>
					<div>
						<button onClick={prevPerson}>
							<AiFillLeftSquare />
						</button>
						<button onClick={nextPerson}>
							<AiFillRightSquare />
						</button>
					</div>
				</div>
			}
		</section>
	);
}

export default App;
