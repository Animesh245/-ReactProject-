import React from 'react';
import { Table } from 'react-bootstrap';

const Bill = () => {
	return (
		<div>
			<h1 style={{ textAlign: 'left', padding: '30px 0px 10px 30px' }}>BILLS</h1>
			<div style={{ paddingLeft: '30px', paddingRight: '30px' }}>
				<Table striped bordered hover responsive>
					<thead>
						<tr>
							<th>#</th>
							<th>Bill No.</th>
							<th>Bill Date</th>
							<th>Units Consumed</th>
							<th>Amount</th>
							<th>Due Date</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>0001</td>
							<td>1/2/22</td>
							<td>102</td>
							<td>1300</td>
							<td>1/3/22</td>
							<td>Pending</td>
						</tr>
						<tr>
							<td>2</td>
							<td>0011</td>
							<td>1/2/22</td>
							<td>120</td>
							<td>1400</td>
							<td>1/3/22</td>
							<td>Pending</td>
						</tr>
						<tr>
							<td>3</td>
							<td>0001</td>
							<td>1/2/22</td>
							<td>102</td>
							<td>1300</td>
							<td>1/3/22</td>
							<td>Pending</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};

export default Bill;
