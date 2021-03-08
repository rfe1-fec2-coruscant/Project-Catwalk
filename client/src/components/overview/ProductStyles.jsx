import React from 'react';

import StyleBubble from './StyleBubble.jsx';

var ProductStyles = ( {styles, currentStyle, changeStyle} ) => (
  <div id="product-styles">
    <p className="style-header">Style > <strong>{currentStyle.name}</strong></p>
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