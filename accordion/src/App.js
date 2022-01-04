import React, { useState } from 'react';
import questions from './Data';
import data from './Data';
import SingleQuestion from './Question';

function App() {
	const [ questions, setQuestions ] = useState(data);
	return (
		// <h2>Accodion</h2>
		<main>
			<div className="container">
				<h3>questions and answers about login</h3>
				<section className="info">
					{questions.map((question) => {
						return <SingleQuestion key={question.id} {...question} />;
					})}
				</section>
			</div>
		</main>
	);
}

export default App;
