import React from 'react';
import Emoji from './Emoji';

function IconField(props) {
  const numComps = parseInt(props.numComps, 10);

  return (
    <div className="icons">
      <ExperienceIcon numComps={numComps} />
      {props.delegate && <DelegateIcon />}
      {props.staff && <StaffIcon />}
    </div>
  );
}

function DelegateIcon() {
  return <Emoji emoji={'police_officer'} />;
}

function StaffIcon() {
  return <Emoji emoji={'man_fairy'} />;
}

function ExperienceIcon(props) {
  let icon;

  if (props.numComps <= 1) {
    icon = 'hatching_chick';
  } else if (props.numComps <= 3) {
    icon = 'hatched_chick';
  } else if (props.numComps <= 20) {
    icon = 'duck';
  } else if (props.numComps <= 50) {
    icon = 'eagle';
  } else if (props.numComps > 50) {
    icon = 'owl';
  }

  return <Emoji emoji={icon} />;
}

export default IconField;
