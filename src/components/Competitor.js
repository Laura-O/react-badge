import React from 'react';
import {Textfit} from 'react-textfit';
import {Image} from 'react-bootstrap';

import CompetitorEvents from './CompetitorEvents';
import ExtraInfo from './ExtraInfo';

function Competitor(props) {
  const events = [
    '333',
    '222',
    '444',
    '555',
    '666',
    '777',
    '333bf',
    '333fm',
    '333oh',
    '333ft',
    'minx',
    'pyram',
    'skewb',
    'sq1',
    'clock',
    '444bf',
    '555bf',
    '333mbf',
  ];

  const competitor = props.competitor;

  return (
    <div className="nametag">
      <div className="front">
        <Image className="logo" src="/images/nationals_logo2017.png" />
        <Textfit mode="single" max={58}>
          {competitor.first}
        </Textfit>
        <span className="last">
          {competitor.last}
        </span>
        <ExtraInfo competitor={competitor} />
      </div>
      <div className="back">
        <CompetitorEvents events={events} competitor={competitor} />
      </div>
    </div>
  );
}

export default Competitor;
