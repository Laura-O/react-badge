import React from 'react';
import ReactFileReader from 'react-file-reader';
import {Col, Grid, Row} from 'react-bootstrap';

function Settings(props) {
	return (
		<Grid>
			<Row className="show-grid settings">
				<Col md={4}>
					<ReactFileReader handleFiles={props.handleFiles} fileTypes={'.csv'}>
						<button className="btn hidden-print">Upload</button>
					</ReactFileReader>
				</Col>
				<Col md={8} />
			</Row>
		</Grid>
	);
}

export default Settings;
