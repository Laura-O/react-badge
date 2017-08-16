import React from 'react';

function CompetitorEvents(props) {
  const {events, competitor} = props;

  const fields = events.map(function(event, index) {
    return (
      <div className="wrapper" key={index}>
        <span className={'cubing-icon event-' + event} />
        <span className="group">
          {competitor[event]}
        </span>
      </div>
    );
  });

  return (
    <div className="events">
      {fields}
    </div>
  );
}

export default CompetitorEvents;
