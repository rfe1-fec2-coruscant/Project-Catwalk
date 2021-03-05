import React from 'react';

import ProductStyles from './ProductStyles.jsx';
import PurchaseOptions from './PurchaseOptions.jsx';

var ProductDetails = ( {styles, currentProduct, currentStyle, changeStyle} ) => (
  <div id="product-details">
    <div id="star-rating">Star Rating = ***** <a>See all reviews</a></div>
    <p id="category">Category: {currentProduct.category}</p>
    <h3 id="product-name">{currentProduct.name}</h3>
    <p id="product-price">{currentStyle.original_price}</p>
    <ProductStyles
      styles={styles.results}
      currentStyle={currentStyle}
      changeStyle={changeStyle}
    />
    <PurchaseOptions currentStyle={currentStyle}/>
  </div>

);

export default ProductDetails;