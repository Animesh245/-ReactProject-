import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Container, Dropdown, Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import Dashboard from './dashboard';
import Bill from './bill';
import Transactions from './transactions';
import Complaints from './complaints';
import { BsFillLightningFill, BsFillPersonFill } from 'react-icons/bs';
import Login from './login';
import Signup from './signup';

const NavBar = (props) => {
	const [ signupScreen, setSignupScreen ] = useState(true);
	const [ loginScreen, setLoginScreen ] = useState(false);
	const [ loggedinScreen, setLoggedinScreen ] = useState(false);

	const loggedIn = (userName) => {
		setSignupScreen(false);
		setLoginScreen(false);
		setLoggedinScreen(true);
	};

	const afterLogout = () => {
		localStorage.removeItem('userLoggedIn');
		setLoggedinScreen(false);
		setSignupScreen(false);
		setLoginScreen(true);
	};

	useEffect(() => {
		let user = localStorage.getItem('userLoggedIn');
		if (user !== null) {
			setSignupScreen(false);
			setLoginScreen(false);
			setLoggedinScreen(true);
		}
	}, []);

	return (
		<Router>
			<div>
				<Navbar bg="dark" variant="dark" expand="lg">
					<Container fluid>
						{loggedinScreen ? (
							<React.Fragment>
								<Navbar.Brand as={Link} to={'/'}>
									<BsFillLightningFill />
									E-Bill System
								</Navbar.Brand>

								<Navbar.Toggle aria-controls="basic-navbar-nav" />

								<Navbar.Collapse id="basic-navbar-nav">
									<Nav className="me-auto">
										<Nav.Link as={Link} to={'/dashboard'}>
											DASHBOARD
										</Nav.Link>

										<Nav.Link as={Link} to={'/bills'}>
											BILLS
										</Nav.Link>

										<Nav.Link as={Link} to={'/transactions'}>
											TRANSACTIONS
										</Nav.Link>

										<Nav.Link as={Link} to={'/complaints'}>
											COMPLAINTS
										</Nav.Link>
									</Nav>
									(
									<Dropdown>
										<Dropdown.Toggle id="dropdown-button-dark-example1" variant="outline-light">
											<BsFillPersonFill /> {'  '}
											{localStorage.getItem('userLoggedIn')}{' '}
										</Dropdown.Toggle>

										<Dropdown.Menu variant="dark">
											<Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
											<Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
											<Dropdown.Divider />
											<Dropdown.Item onClick={afterLogout}>Log Out</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
									)
								</Navbar.Collapse>
							</React.Fragment>
						) : (
							<Navbar.Brand>
								<BsFillLightningFill /> E-Bill System
							</Navbar.Brand>
						)}
					</Container>
				</Navbar>
			</div>

			<div>
				{signupScreen ? (
					<div>
						{' '}
						<Signup afterSignup={loggedIn} />{' '}
						<Button
							variant="dark"
							size="lg"
							onClick={() => {
								setLoginScreen(true);
								setSignupScreen(false);
							}}
						>
							Login
						</Button>
					</div>
				) : (
					''
				)}
				{loginScreen ? (
					<div>
						{' '}
						<Login afterLogin={loggedIn} />{' '}
						<Button
							variant="dark"
							size="lg"
							onClick={() => {
								setSignupScreen(true);
								setLoginScreen(false);
							}}
						>
							Signup
						</Button>
					</div>
				) : (
					''
				)}
			</div>

			<Routes>
				{loginScreen || signupScreen ? (
					''
				) : (
					<React.Fragment>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/dashboard" element={<Dashboard />} />
						<Route exact path="/bills" element={<Bill />} />
						<Route exact path="/transactions" element={<Transactions />} />
						<Route exact path="/complaints" element={<Complaints />} />
						{/* <Route exact path="/" element={<Signup />} /> */}
					</React.Fragment>
				)}
			</Routes>
		</Router>
	);
};

export default NavBar;
