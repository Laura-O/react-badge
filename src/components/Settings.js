import React from 'react'
import ReactFileReader from 'react-file-reader';

function Settings(props) {
  return(
    <div>
      <ReactFileReader handleFiles={props.handleFiles} fileTypes={'.csv'}>
        <button className='btn hidden-print'>Upload</button>
      </ReactFileReader>
    </div>
  )
}
  
export default Settings;