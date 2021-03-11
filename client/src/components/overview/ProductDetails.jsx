import React from 'react';

import ProductStyles from './ProductStyles.jsx';
import PurchaseOptions from './PurchaseOptions.jsx';
import StarRating from './StarRating.jsx';

var ProductDetails = ( {styles, currentProduct, currentStyle, changeStyle, reviews, addtoCart} ) => (
  <div id="product-details">
    <StarRating reviews={reviews}/>
    <p id="category" className="header-text">Category: {currentProduct.category}</p>
    <h3 id="product-name" className="biggest-text">{currentProduct.name}</h3>
    <p id="product-price" className="regular-text">{currentStyle.original_price}</p>
    <ProductStyles
      styles={styles.results}
      currentStyle={currentStyle}
      changeStyle={changeStyle}
    />
    <PurchaseOptions currentStyle={currentStyle} addtoCart={addtoCart}/>
  </div>

);

export default ProductDetails;