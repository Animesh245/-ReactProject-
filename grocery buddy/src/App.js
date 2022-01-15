import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
	let list = localStorage.getItem('list');
	if (list) {
		return JSON.parse(localStorage.getItem('list'));
	} else {
		return [];
	}
};

function App() {
	const [ name, setName ] = useState('');
	const [ list, setList ] = useState(getLocalStorage());
	const [ isEditing, setIsEditing ] = useState(false);
	const [ editID, setEditID ] = useState(null);
	const [ alert, setAlert ] = useState({ show: false, msg: '' });

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name) {
			//display alert
			showAlert(true, 'Please enter value');
		} else if (name && isEditing) {
			//deal with edit
			setList(
				list.map((item) => {
					if (item.id === editID) {
						return { ...item, title: name };
					}
					return item;
				})
			);
			setName('');
			setEditID(null);
			setIsEditing(false);
			showAlert(true, 'value change');
		} else {
			//show alert
			const newItem = { id: new Date().getTime().toString(), title: name };
			setList([ ...list, newItem ]);
			showAlert(true, 'Item added');
			setName('');
		}
	};

	const showAlert = (show = false, msg = '') => {
		setAlert({ show, msg });
	};

	const clearList = () => {
		showAlert(true, 'Empty list');
		setList([]);
	};

	const removeItem = (id) => {
		const newList = list.filter((item) => item.id !== id);
		setList(newList);
		showAlert(true, 'Item removed');
	};

	const editItem = (id) => {
		const specificItem = list.find((item) => item.id === id);
		setIsEditing(true);
		setEditID(id);
		setName(specificItem.title);
	};

	useEffect(
		() => {
			localStorage.setItem('list', JSON.stringify(list));
		},
		[ list ]
	);
	return (
		<section>
			<form onSubmit={handleSubmit}>
				{alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
				<h3>Grocery Bud</h3>
				<div>
					<input type="text" value={name} placeholder="e.g. milk" onChange={(e) => setName(e.target.value)} />

					<button type="submit">{isEditing ? 'edit' : 'submit'}</button>
				</div>
			</form>
			{list.length > 0 && (
				<div>
					<List items={list} removeItem={removeItem} editItem={editItem} />
					<button onClick={clearList}>Clear Items</button>
				</div>
			)}
		</section>
	);
}

export default App;
