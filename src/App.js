import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Papa from 'papaparse';
import ReactFileReader from 'react-file-reader';
import CompetitorTable from './components/CompetitorTable'
import NameTags from './components/NameTags'

class App extends Component {
  constructor(props) {
        super(props);        
        this.state = {
            competitors: [],
            keys: []
        };
    }

  handleFiles = files => {
    Papa.parse(files[0], {
      header: true,
      complete: (results) => {
          this.setState( {
              competitors: results.data,
              keys: Object.keys(results.data[0])
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
        
        <Route exact path='/' render={() => (
            <CompetitorTable
              competitors={this.state.competitors}
              keys={this.state.keys}
            />
          )}
        />
        <Route exact path='/nametags' render={() => (
            <NameTags
              competitors={this.state.competitors}
              keys={this.state.keys}
            />
          )}
        />
      </div>
    );
  }
}
export default App;
