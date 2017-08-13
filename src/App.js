import React, {Component} from 'react';
import './css/App.css';
import {Route} from 'react-router-dom';
import Papa from 'papaparse';
import CompetitorTable from './components/CompetitorTable';
import NameTags from './components/NameTags';
import Navigation from './components/Navigation';
import Settings from './components/Settings';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			competitors: [],
			keys: []
		};
	}

	componentDidMount() {
		const cachedCompetitors = JSON.parse(localStorage.getItem('competitors'));
		console.log(cachedCompetitors);
		if (cachedCompetitors) {
			this.setState({
				competitors: cachedCompetitors,
				keys: Object.keys(cachedCompetitors[0])
			});
		}
	}

	handleFiles = files => {
		Papa.parse(files[0], {
			header: true,
			complete: results => {
				this.setState({
					competitors: results.data,
					keys: Object.keys(results.data[0])
				});
				localStorage.setItem('competitors', JSON.stringify(results.data));
			}
		});
	};

	render() {
		return (
			<div className="App">
				<Navigation className="hidden-print" />

				<Settings
					className="hidden-print"
					handleFiles={file => this.handleFiles(file)}
				/>

				<Route
					exact
					path="/"
					render={() =>
						<NameTags
							competitors={this.state.competitors}
							keys={this.state.keys}
						/>}
				/>

				<Route
					exact
					path="/competitors"
					render={() =>
						<CompetitorTable
							competitors={this.state.competitors}
							keys={this.state.keys}
						/>}
				/>
			</div>
		);
	}
}
export default App;
