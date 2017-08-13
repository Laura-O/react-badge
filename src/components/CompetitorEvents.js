import React from 'react';

function CompetitorEvents(props) {
  const events = props.events;
  const competitor = props.competitor;
  
  const fields = events.map(function(event, index){
    return(
      // <li className={"cubing-icon event-" + event} key={index}>
        <div className="wrapper"><span className={"cubing-icon event-" + event}></span><span>{competitor[event]}</span></div>
      // </li>
    )
  })
  
  return (
    <div className="events">
      {/* <ol className="events"> */}
        {fields}
      {/* </ol> */}
    </div>
  )
}

export default CompetitorEvents;