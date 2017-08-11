import React from 'react';
import { Textfit } from 'react-textfit';
import CompetitorEvents from './CompetitorEvents'

function Competitor(props) {
    const events = ['333', '222', '444', '555', '666', '777', '333bf',
                      '333fm', '333oh', '333ft', 'minx', 'pyram', 'skewb',
                      'sq1', 'clock', '444bf', '555bf', '333mbf', ];
        
    const competitor = props.competitor;
    
    return (
      <div className="nametag">
        <div className="front">          
          <Textfit mode="single">{competitor.first}</Textfit>
          <div className="last">{competitor.last}</div>
        </div>        
        <div className="back">
          <CompetitorEvents events={events} competitor={competitor} />          
        </div>
      </div>
    )
}


export default Competitor