import React, { useState } from 'react';
import data from './data';

function App() {
	const [ count, setCount ] = useState(0);
	const [ texts, setTexts ] = useState([]);

	const handleClick = (e) => {
		e.preventDefault();
		let num = parseInt(count);

		if (count <= 0) {
			num = 1;
		}
		if (count > 8) {
			num = 8;
		}
		setTexts(data.slice(0, num));
	};

	return (
		<section>
			<h2>Random text generator</h2>
			<form onSubmit={handleClick}>
				<label>Paragraph: </label>
				<input type="number" id="num" name="num" value={count} onChange={(e) => setCount(e.target.value)} />
				<button>GENERATE</button>
			</form>
			<article>
				{texts.map((item, index) => {
					return <p key={index}>{item}</p>;
				})}
			</article>
		</section>
	);
}

export default App;
