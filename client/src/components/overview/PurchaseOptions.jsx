import React from 'react';

class PurchaseOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0
    };
  }

  render () {
    return (
      <div id="purchase-options">
        <div>
          <div id="size-selector" className="largeButton purchase-buttons bold-text">Size</div>
          <input
            id="quantity-selector"
            type="number"
            min="1" max="12"
            className="purchase-buttons bold-text"
          ></input>
        </div>
        <div>
          <div id="add-to-cart-button" className="purchase-buttons">Add To Cart</div>
          <div id="favorite" className="purchase-buttons">*</div>
        </div>
      </div>
    );
  }
}

export default PurchaseOptions;