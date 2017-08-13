import React from 'react';

function CompetitorEvents(props) {
  const events = props.events;
  const competitor = props.competitor;
  
  const fields = events.map(function(event, index){
    return(
        <div className="wrapper" key={index}>
          <span className={"cubing-icon event-" + event} />
          <span>{competitor[event]}</span>
        </div>
    )
  })
  
  return (
    <div className="events">
        {fields}
    </div>
  )
}

export default CompetitorEvents;