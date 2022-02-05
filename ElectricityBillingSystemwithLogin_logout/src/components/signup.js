import { Alert, Button, InputGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Signup = (props) => {
	const [ userName, setUserName ] = useState('');
	const [ password1, setPassword1 ] = useState('');
	const [ password2, setPassword2 ] = useState('');
	const [ showType1, setShowType1 ] = useState(false);
	const [ showType2, setShowType2 ] = useState(false);

	let auth = JSON.parse(localStorage.getItem('auth'));

	if (auth === null) {
		auth = [ { username: 'aaa', password: 'aaa' } ];
	}

	const handleSignup = () => {
		const filter = auth.filter((d) => d.username === userName);
		if (filter.length !== 0) {
			alert(userName + ' exists!');
		} else {
			if (password1 === password2) {
				if (filter.length === 0) {
					auth = [ ...auth, { username: userName, password: password1 } ];
					localStorage.setItem('auth', JSON.stringify(auth));
					localStorage.setItem('userLoggedIn', userName);
					setUserName('');
					setPassword1('');
					setPassword2('');
					props.afterSignup(userName);
					// props.user(userName);
				}
			} else {
				// <Alert variant="danger">Passwords are not matching</Alert>;
				alert('Passwords are not matching');
			}
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
					type={showType1 ? 'text' : 'password'}
					value={password1}
					onChange={(e) => setPassword1(e.target.value)}
				/>
				<Button
					variant="dark"
					onClick={() => {
						setShowType1(!showType1);
					}}
				>
					{showType1 ? <FaRegEye /> : <FaRegEyeSlash />}
				</Button>

				<span style={{ margin: '5px' }} />
				<input
					placeholder="Confirm Password"
					type={showType2 ? 'text' : 'password'}
					value={password2}
					onChange={(e) => setPassword2(e.target.value)}
				/>
				<Button
					variant="dark"
					onClick={() => {
						setShowType2(!showType2);
					}}
				>
					{showType2 ? <FaRegEye /> : <FaRegEyeSlash />}
				</Button>
				<span style={{ margin: '5px' }} />
				{userName && password1 && password2 !== '' ? (
					<Button variant="success" onClick={handleSignup} active>
						Signup
					</Button>
				) : (
					<Button variant="success" onClick={handleSignup} disabled>
						Signup
					</Button>
				)}
			</InputGroup>
		</div>
	);
};

export default Signup;
