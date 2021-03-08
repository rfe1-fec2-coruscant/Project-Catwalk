import React from 'react';

var StyleBubble = ( {style, changeStyle, currentStyle} ) => {
  if (style.style_id === currentStyle.style_id) {
    return(
      <div className="style-bubble target-style">
        <img
          alt=""
          src={style.photos[0].thumbnail_url}
          id={style.style_id}
          onClick={changeStyle}
        ></img>
      </div>
    )
  } else {
    return(
      <div className="style-bubble">
        <img
          alt=""
          src={style.photos[0].thumbnail_url}
          id={style.style_id}
          onClick={changeStyle}
        ></img>
      </div>
    )
  }
}

export default StyleBubble;