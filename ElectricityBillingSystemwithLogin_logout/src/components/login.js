import { Button, InputGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Signup from './signup';

const Login = (props) => {
	const [ userName, setUserName ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ showType, setShowType ] = useState(false);

	let auth = JSON.parse(localStorage.getItem('auth'));

	// if (auth === null) {
	// 	// auth = [ { username: 'aaa', password: 'aaa' } ];
	// 	alert('No user found!');
	// 	// return <Signup />;
	// }

	// if (auth === null) {
	// 	alert('No user found..');
	// }

	const handleLogin = () => {
		if (auth === null) {
			alert('No user found..signup to be the first user!');
		}
		const filter = auth.filter((d) => d.username === userName);

		if (filter.length !== 0) {
			if (filter[0].password === password) {
				localStorage.setItem('userLoggedIn', userName);
				setUserName('');
				setPassword('');
				props.afterLogin(userName);
			} else {
				alert('Wrong password');
			}
		} else {
			alert('Signup first!');
		}
	};

	return (
		<div style={{ margin: '40px' }}>
			<InputGroup>
				<span style={{ margin: '5px' }} />
				<input
					type="text"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
					placeholder="Username"
				/>
				<span style={{ margin: '5px' }} />
				<input
					placeholder="Password"
					type={showType ? 'text' : 'password'}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button
					variant="dark"
					onClick={() => {
						setShowType(!showType);
					}}
				>
					{showType ? <FaRegEye /> : <FaRegEyeSlash />}
				</Button>

				<span style={{ margin: '5px' }} />
				{userName && password !== '' ? (
					<Button variant="success" onClick={handleLogin} active>
						Login
					</Button>
				) : (
					<Button variant="success" onClick={handleLogin} disabled>
						Login
					</Button>
				)}
			</InputGroup>
		</div>
	);
};

export default Login;
