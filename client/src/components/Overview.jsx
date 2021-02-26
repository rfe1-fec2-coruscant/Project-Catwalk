import React from 'react';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div id="overview">
        <div id="product-display">
          <div id="image-gallery"></div>
          <div id="product-details">
            <div id="star-rating">Start Rating = *****</div>
            <p id="category">Category</p>
            <h3 id="product-name">Ugly Christmas Sweater</h3>
            <p id="product-price">Price</p>
            <div id="product-styles">
              <p className="style-header">Style > <strong>Current Style</strong></p>
              <div id="styles-container">
                <div className="style-bubble"></div>
                <div className="style-bubble"></div>
                <div className="style-bubble"></div>
                <div className="style-bubble"></div>
                <div className="style-bubble"></div>
                <div className="style-bubble"></div>
                <div className="style-bubble"></div>
                <div className="style-bubble"></div>
              </div>
            </div>
            <div id="purchase-options">
              <div className="outline">
                <div id="size-selector" className="purchase-buttons">Size</div>
                <div id="quantity-selector" className="purchase-buttons">Quant</div>
              </div>
              <div>
                <div id="add-to-cart-button" className="purchase-buttons">Add To Cart</div>
                <div id="favorite" className="purchase-buttons">*</div>
              </div>
            </div>
          </div>
        </div>
        <div id="product-description" className="outline">
          <h3>Product Description</h3>
          <p>Ea quis esse amet laborum dolore nisi labore duis do. Proident aliqua commodo aliqua officia cupidatat duis aliquip amet commodo aliquip ea eu officia dolore. Anim reprehenderit ut amet dolor cillum aliquip adipisicing nulla.</p>
        </div>
      </div>
    );
  }
}

export default Overview;