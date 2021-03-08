import React from 'react';

import ProductStyles from './ProductStyles.jsx';
import PurchaseOptions from './PurchaseOptions.jsx';
import StarRating from './StarRating.jsx';

var ProductDetails = ( {styles, currentProduct, currentStyle, changeStyle, reviews} ) => (
  <div id="product-details">
    <StarRating reviews={reviews}/>
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