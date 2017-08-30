import React from 'react';
import IconField from './IconField';

function ExtraInfo(props) {
  const {extra, numComps, sex} = props.competitor;
  const delegate = props.competitor.delegate === '1';
  const staff = props.competitor.staff === '1';
  const orga = props.competitor.orga === '1';

  return (
    <div>
      {delegate && <Delegate delegate={delegate} />}
      {orga && !delegate && <Orga orga={orga} />}
      {staff && !orga && !delegate && <Staff staff={staff} />}
      <CompetitionNumber numComps={numComps} />
      <IconField
        numComps={numComps}
        delegate={delegate}
        orga={orga}
        staff={staff}
        sex={sex}
        extra={extra}
      />
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

  let numComps = parseInt(props.numComps) + 1;

  return (
    <div className="competitions">
      {numComps}
      {nth(numComps)} competition
    </div>
  );
}

function Delegate(props) {
  return <span className="delegate">WCA Delegate</span>;
}

function Orga(props) {
  return <span className="orga">Organizer</span>;
}

function Staff(props) {
  return <span className="staff">Staff</span>;
}

export default ExtraInfo;
