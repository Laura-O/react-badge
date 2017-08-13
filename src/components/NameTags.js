import React from 'react';
import Competitor from './Competitor'

function NameTags(props) {
  const competitors = props.competitors;    
  
  return (
    <div className="tags">
      {competitors.map( (competitor, index) =>
        <Competitor competitor={competitor} key={index} />          
      )}      
    </div>
    )
}

export default NameTags;