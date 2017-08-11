import React, { Component } from 'react';
import Competitor from './Competitor'

function NameTags(props) {
  const competitors = props.competitors;    
  
  return (
    <div>
      {competitors.map( competitor =>
        <Competitor competitor={competitor}/>          
      )}      
    </div>
    )
}

export default NameTags;