import React from 'react';

function CompetitorEvents(props) {
  const events = props.events;
  const competitor = props.competitor;
  
  const fields = events.map(function(event, index){
    return(
      <li className={"cubing-icon event-" + event} key={index}>
        <span className="groupnumber">{competitor[event]}</span>
      </li>
    )
  })
  
  return (
    <div>
      <ul className="events">
        {fields}
      </ul>
    </div>
  )
}

export default CompetitorEvents;