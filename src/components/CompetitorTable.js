import React from 'react';
import {Table} from 'react-bootstrap';

function CompetitorTable(props) {
	const competitors = props.competitors;
	let keys = props.keys;

	return (
		<div>
			<Table responsive>
				<thead>
					<tr>
						{keys.map(key =>
							<th>
								{key}
							</th>
						)}
					</tr>
				</thead>
				<tbody>
					{competitors.map(competitor =>
						<tr>
							{keys.map(key =>
								<td>
									{competitor[key]}
								</td>
							)}
						</tr>
					)}
				</tbody>
			</Table>
		</div>
	);
}

export default CompetitorTable;
