import React from 'react';
import Emojione  from 'emojione';

function ExtraInfo(props) {
  const numComps = props.competitor.comps;
  const delegate = props.competitor.delegate === '1';
  const staff = props.competitor.staff === '1';
  let emoji = Emojione.toImage(':smiley:');
  
  return(
    <div>
      <CompetitionNumber numComps={numComps} />
      <span dangerouslySetInnerHTML={{__html: emoji}} />
      <Delegate delegate={delegate} />
      <Staff staff={staff} />
    </div>
  )    
}

function CompetitionNumber(props) {
  function nth(d) {
    if(d>3 && d<21) return 'th';
    switch (d % 10) {
          case 1:  return 'st';
          case 2:  return 'nd';
          case 3:  return 'rd';
          default: return 'th';
    }
  }
  
  return (
    <div>{props.numComps}{nth(props.numComps)} competition</div>
  )
}

function Delegate(props) {
  if (!props.delegate) {
    return null;
  }
  return (
    <div className="delegate">WCA Delegate</div>
  )
}

function Staff(props) {
  if (!props.staff) {
    return null;
  }
  return (
    <div className="staff">Staff</div>
  )
}

export default ExtraInfo;