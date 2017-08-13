import React from 'react';
import Emojione  from 'emojione';

function EmojiField(props) {
  let emoji = Emojione.toImage(':smiley:');
    
  return(
    <div>
      <span dangerouslySetInnerHTML={{__html: emoji}} />
    </div>
  )
}

export default EmojiField;