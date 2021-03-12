import React from 'react';

import StyleBubble from './StyleBubble.jsx';

var ProductStyles = ( {styles, currentStyle, changeStyle} ) => (
  <div id="product-styles">
    <p className="bold-text style-header">STYLE > <span id="style-text">{currentStyle.name.toUpperCase()}</span></p>
    <div id="styles-container">
      {
        styles.map( (style) => {
          return (
             <StyleBubble
               style={style}
               changeStyle={changeStyle}
               key={style.style_id}
               currentStyle={currentStyle}
              />
           )
        })
      }
    </div>
  </div>
);

export default ProductStyles;