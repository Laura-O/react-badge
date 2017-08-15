import React from 'react';
import Emoji from './Emoji';

function IconField(props) {
  const numComps = parseInt(props.numComps, 10);
  const sex = props.sex === '1';
  const extra = props.extra;

  return (
    <div className="icons">
      <ExperienceIcon numComps={numComps} />
      {props.delegate && <DelegateIcon sex={sex} />}
      {props.staff && <StaffIcon sex={sex} />}
      {props.extra && <ExtraIcon extra={extra} />}
    </div>
  );
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

function DelegateIcon(props) {
  const sex = props.sex;
  if (sex) {
    return <Emoji emoji={'woman_police_officer'} />;
  } else {
    return <Emoji emoji={'police_officer'} />;
  }
}

function StaffIcon(props) {
  const sex = props.sex;
  if (sex) {
    return <Emoji emoji={'woman_fairy'} />;
  } else {
    return <Emoji emoji={'man_fairy'} />;
  }
}

function ExtraIcon(props) {
  const extra = props.extra;
  return <Emoji emoji={extra} />;
}

export default IconField;
