import React from 'react';
import { Table } from 'react-bootstrap';

const Complaints = () => {
	return (
		<div>
			<h1 style={{ textAlign: 'left', padding: '30px 0px 10px 30px' }}>COMPLAINTS</h1>
			<div style={{ paddingLeft: '30px', paddingRight: '30px' }}>
				<Table striped bordered hover responsive>
					<thead>
						<tr>
							<th>Complaint No.</th>
							<th>Complaint</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>0001</td>
							<td>1/2/22</td>
						</tr>
						<tr>
							<td>2</td>
							<td>0011</td>
							<td>1/2/22</td>
						</tr>
						<tr>
							<td>3</td>
							<td>0001</td>
							<td>1/2/22</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default Complaints;
