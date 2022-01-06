import React, { useState } from 'react';
import items from './Data';
import Categories from './Categories';
import Menu from './Menu';

const allCategories = [ 'all', ...new Set(items.map((item) => item.category)) ];
console.log(allCategories);

function App() {
	const [ menuItems, setMenuItems ] = useState(items);
	const [ categories, setCategories ] = useState(allCategories);

	const filterItems = (category) => {
		if (category === 'all') {
			return setMenuItems(items);
			// return;
		}
		const newItems = items.filter((item) => {
			return item.category === category;
		});
		setMenuItems(newItems);
	};

	return (
		<main>
			<section>
				<div>
					<h2>our menu</h2>
				</div>
				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	);
}

export default App;
