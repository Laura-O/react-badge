import React from 'react';
import Emojione  from 'emojione';

function EmojiField(props) {  
  const numComps = parseInt(props.numComps,10);
    
  return(
    <div>
      <ExperienceIcon numComps={numComps} />
      {props.delegate && <DelegateIcon />}
      {props.delegate && <StaffIcon />}
    </div>
  )
}

function DelegateIcon() {
  const delegate = Emojione.toImage(':police_officer:');
  return(
    <span dangerouslySetInnerHTML={{__html: delegate}} />
  )
}

function StaffIcon() {
  const staff = Emojione.toImage(':man_fairy:');
  return(
    <span dangerouslySetInnerHTML={{__html: staff}} />
  )
}

function ExperienceIcon(props) {
  const hatching = Emojione.toImage(':hatching_chick:');
  const chicken = Emojione.toImage(':hatched_chick:');
  const duck = Emojione.toImage(':duck:');
  const eagle = Emojione.toImage(':eagle:');
  const owl = Emojione.toImage(':owl:');
  
  let icon;
  
  if (props.numComps <= 1) {
    icon = hatching;
  } else if (props.numComps <= 3) {
    icon = chicken;
  } else if (props.numComps <= 20) {
    icon = duck;
  } else if (props.numComps <= 50) {
    icon = eagle;
  } else if (props.numComps > 50) {
    icon = owl;
  }  
  
  return(
    <span dangerouslySetInnerHTML={{__html: icon}} />
  )
}

export default EmojiField;