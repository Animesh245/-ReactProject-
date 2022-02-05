import React from 'react';
// import Home from '.components/Home';
import { Form, Button, Table } from 'react-bootstrap';

const Dashboard = () => {
	return (
		<div>
			<h1 style={{ textAlign: 'left', padding: '30px 0px 10px 30px' }}>DASHBOARD</h1>
			<div style={{ paddingLeft: '30px', paddingRight: '30px' }}>
				<Table striped bordered hover variant="dark">
					<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<td>3</td>
							<td colSpan={2}>Larry the Bird</td>
							<td>@twitter</td>
						</tr>
					</tbody>
				</Table>
			</div>

			{/* <div>
				<Form>
					<Form.Group className="mb-3" controlId="formBasicInfo">
						<Form.Label>Meter No</Form.Label>
						<Form.Control type="text" placeholder="meter no." />

						<Form.Label>FirstName</Form.Label>
						<Form.Control type="text" placeholder="Enter firstname" />

						<Form.Label>LastName</Form.Label>
						<Form.Control type="text" placeholder="Enter lastname" />

						<Form.Label>Address</Form.Label>
						<Form.Control type="text" placeholder="Enter address" />

						<Form.Label>Postcode</Form.Label>
						<Form.Control type="text" placeholder="Enter postcode" />

						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" />
						<Form.Text className="text-muted">Above information is correct</Form.Text>
					</Form.Group>
					<Button variant="primary" type="submit">
						Update
					</Button>
				</Form>
			</div> */}
		</div>
	);
};

export default Dashboard;
