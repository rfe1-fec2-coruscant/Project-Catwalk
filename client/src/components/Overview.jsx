import React from 'react';
import ajaxRequests from '../../ajaxRequests.js'

import ImageGallery from './overview/ImageGallery.jsx';
import ProductDetails from './overview/ProductDetails.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.currentProduct,
      styles: {},
      currentStyle: {},
      reviewRating: {}
    };
    this.updateStyles = this.updateStyles.bind(this);
    this.changeCurrentStyle = this.changeCurrentStyle.bind(this);
    this.getReviewRating = this.getReviewRating.bind(this);
    this.calculateRating = this.calculateRating.bind(this);
  }

  updateStyles(newData) {
    // console.log('changing state');
    // debugger;
    this.setState({
      styles: newData,
      currentStyle: newData.results[0]
    }, this.getReviewRating(this.state.product.id));
  }

  getReviewRating(productId) {
    ajaxRequests.get(`reviews/meta?product_id=${productId}`, (returnData) => {
      // console.log(returnData);
      let rating = this.calculateRating(returnData.ratings);
      this.setState({
        reviewRating: rating
      });
    });
  }

  calculateRating(ratingsObj) {
    let starNumbers = Object.keys(ratingsObj);
    let calculatedRating = 0;
    let numberOfReviews = 0;
    // debugger;
    for (var i = 0; i < starNumbers.length; i++) {
      calculatedRating += (starNumbers[i] * ratingsObj[starNumbers[i]]);
      numberOfReviews += parseInt(ratingsObj[starNumbers[i]]);
    }
    calculatedRating /= numberOfReviews;
    return {
      rating: calculatedRating,
      num: numberOfReviews
    }
  }

  changeCurrentStyle(event) {
    // debugger;
    var styles = this.state.styles.results;
    for (var i = 0; i < styles.length; i++) {
      console.log(styles[i].style_id);
      if (event.target.id == styles[i].style_id) {
        this.setState({
          currentStyle: styles[i]
        });
        break;
      }
    }
  }

  render() {
    // debugger;
    // console.log(Object.keys(this.state.product), Object.keys(this.state.style))
    if (Object.keys(this.state.product).length && Object.keys(this.state.styles).length) {
      return(
        <div id="overview">
          <div id="product-display">
            <ImageGallery currentProduct={this.state.currentStyle}/>
            <ProductDetails
              styles={this.state.styles}
              currentProduct={this.state.product}
              currentStyle={this.state.currentStyle}
              changeStyle={this.changeCurrentStyle}
              reviews={this.state.reviewRating}
            />
          </div>
          <div id="product-description" className="outline">
            <h3>Product Description</h3>
            <p>{this.state.product.description}</p>
          </div>
        </div>
      );
    } else {
      // console.log(this.state);
      return (
        <div id="overview">
          <div id="product-display">
            <div id="image-gallery">Loading...</div>
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

  componentDidMount() {
    // if (this.state.product.id !== this.state.style.product_id) {
    // }
      // get new style data
      ajaxRequests.get(`products/${this.state.product.id}/styles`, this.updateStyles);
  }
}

export default Overview;