import React from 'react';



var AddToCart = ( {addtoCart, qty} ) => {
  if (qty) {
    return(
      <div
      id="add-to-cart-button"
      className="purchase-buttons largeButton">
        Add To Cart
      </div>
    );
  } else {
    return(
      <div
      id="add-to-cart-button"
      className="purchase-buttons largeButton">
        Add To Cart
      </div>
    );
  }

}

export default AddToCart;