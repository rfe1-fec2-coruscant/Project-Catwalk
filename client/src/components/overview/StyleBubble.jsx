import React from 'react';

var StyleBubble = ( {style, changeStyle} ) => (
  <div className="style-bubble">
    <img
      alt=""
      src={style.photos[0].thumbnail_url}
      id={style.style_id}
      onClick={changeStyle}
    ></img>
  </div>
);

export default StyleBubble;