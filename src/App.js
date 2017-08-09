import React, { Component } from 'react';
import './App.css';
import Papa from 'papaparse';
import ReactFileReader from 'react-file-reader';
import CompetitorTable from './components/CompetitorTable'

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            competitors: [],
        };
    }

  handleFiles = files => {
    Papa.parse(files[0], {
      header: true,
      complete: (results) => {
          console.log(results.data);
          this.setState( {
              competitors: results.data,
          });
        }
      });
  }


  render() {
    return (
      <div className="App">
        <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
          <button className='btn'>Upload</button>
        </ReactFileReader>
        <CompetitorTable competitors={this.state.competitors} />
      </div>
    );
  }
}
export default App;
