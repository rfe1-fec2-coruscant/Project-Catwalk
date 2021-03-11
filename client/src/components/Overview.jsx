import React from 'react';
import ajaxRequests from '../../ajaxRequests.js';

import ImageGallery from './overview/ImageGallery.jsx';
import ProductDetails from './overview/ProductDetails.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    }, this.getReviewRating(this.props.product.id));
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
      // console.log(styles[i].style_id);
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
    if ( /*Object.keys(this.props.product).length &&*/ Object.keys(this.state.styles).length) {
      return(
        <div id="overview">
          <div id="product-display">
            <div id="overview-left">
              <ImageGallery currentProduct={this.state.currentStyle}/>
              <div id="product-description" >
                <div  className= "bold-text" id="description-header">Product Description</div>
                <p className= "regular-text">{this.props.product.description}</p>
              </div>
            </div>
            <div id="overview-right">
              <ProductDetails
                styles={this.state.styles}
                currentProduct={this.props.product}
                currentStyle={this.state.currentStyle}
                changeStyle={this.changeCurrentStyle}
                reviews={this.state.reviewRating}
                addtoCart={this.props.addtoCart}
              />
            </div>
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
              <div className="small-text" id="star-rating">Start Rating = *****</div>
              <p className="header-text" id="category">Category</p>
              <h3 id="product-name">Ugly Christmas Sweater</h3>
              <p className="regular-text" id="product-price">Price</p>
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
              {/* <div className="outline"> */}
                <div>
                  <div id="size-selector" className="largeButton purchase-buttons">Size</div>
                  <div id="quantity-selector" className="largeButton purchase-buttons">Quant</div>
                </div>
                <div>
                  <div id="add-to-cart-button" className="largeButton purchase-buttons">Add To Cart</div>
                  <div id="favorite" className="largeButton purchase-buttons">*</div>
                </div>
              </div>
            </div>
          </div>
          <div className="outline center-subwidgets">
            <h3 id="product-description" className="bold-text">Product Description</h3>
            <p className="small-text">Ea quis esse amet laborum dolore nisi labore duis do. Proident aliqua commodo aliqua officia cupidatat duis aliquip amet commodo aliquip ea eu officia dolore. Anim reprehenderit ut amet dolor cillum aliquip adipisicing nulla.</p>
          </div>
        </div>
      );
    }
  }

  componentDidMount() {
    // if (this.state.product.id !== this.state.style.product_id) {
    // }
      // get new style data

      ajaxRequests.get(`products/${this.props.product.id}/styles`, this.updateStyles);
  }

  componentDidUpdate(prevProps) {
    // console.log('props:',prevProps.product, this.props.product);
    if (prevProps.product !== this.props.product) {
      ajaxRequests.get(`products/${this.props.product.id}/styles`, this.updateStyles);
    }
  }
}

export default Overview;