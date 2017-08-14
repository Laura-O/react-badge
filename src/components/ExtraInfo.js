import React from 'react';
import IconField from './IconField';

function ExtraInfo(props) {
  const {numComps, sex} = props.competitor;
  const delegate = props.competitor.delegate === '1';
  const staff = props.competitor.staff === '1';
  console.log(props.competitor.staff);

  return (
    <div>
      {delegate && <Delegate delegate={delegate} />}
      {staff && !delegate && <Staff staff={staff} />}
      <CompetitionNumber numComps={numComps} />
      <IconField numComps={numComps} delegate={delegate} />
    </div>
  );
}

function CompetitionNumber(props) {
  function nth(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  return (
    <div className="comp-num">
      {props.numComps}
      {nth(props.numComps)} competition
    </div>
  );
}

function Delegate(props) {
  return <span className="delegate">WCA Delegate</span>;
}

function Staff(props) {
  return <span className="staff">Staff</span>;
}

export default ExtraInfo;
