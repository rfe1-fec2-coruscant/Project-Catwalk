import React from 'react';



var AddToCart = ( {addtoCart, qty} ) => {
  if (qty) {
    return(
      <div
      id="add-to-cart-button"
      className="purchase-buttons largeButton">
        ADD TO CART
      </div>
    );
  } else {
    return(
      <div
      id="add-to-cart-button"
      className="purchase-buttons largeButton">
        ADD TO CART
      </div>
    );
  }

}

export default AddToCart;