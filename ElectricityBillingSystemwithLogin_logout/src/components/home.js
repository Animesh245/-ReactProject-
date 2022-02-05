import React, { useState, useEffect } from 'react';
import payra from '/vsCode/MERN STACK/ElectricityBillingApp/ebill/src/img/payra.jpg';
import { Form, Button } from 'react-bootstrap';
import Login from './login';
import Signup from './signup';
import { Image } from 'react-bootstrap';

const Home = () => {
	const height = window.innerHeight;
	const width = window.width;
	return (
		<div>
			{/* <h2>This is home</h2> */}

			<Image
				src={payra}
				style={{
					backgroundRepeat: 'no-repeat',
					eight: { height },
					width: '80%',
					backgroundSize: 'cover'
				}}
				fluid
			/>
		</div>
	);
};

export default Home;
