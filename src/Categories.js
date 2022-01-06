import React from 'react';

const categories = ({ filterItems, categories }) => {
	return (
		<div>
			{categories.map((category, index) => {
				return (
					<button type="button" key={index} onClick={() => filterItems(category)}>
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default categories;
