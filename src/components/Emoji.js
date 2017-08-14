import React from 'react';
import Emojione from 'emojione';

function Emoji(props) {
  const emoji = Emojione.toImage(':' + props.emoji + ':');
  return <span dangerouslySetInnerHTML={{__html: emoji}} />;
}
export default Emoji;
