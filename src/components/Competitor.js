import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

function Competitor(props) {
    const events = ['333', '222', '444', '555', '666', '777', '333bld',
                      '333fm', '333oh', '333ft', 'minx', 'pyram', 'skewb',
                      'clock', '444bf', '555bf', '333mbf', ];
        
    const competitor = props.competitor;
    
    return (
      <div>
        <div className="first">{competitor.first}</div>
        <Table>
        {this.events.map(event =>
          <tr>
            <td>
              <span className={"cubing-icon event-" + event}></span>{competitor[event]}
            </td>
          </tr>
        )}        
        </Table>        
      </div>
    )
}


export default Competitor