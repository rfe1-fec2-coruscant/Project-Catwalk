import React from 'react';
import ajaxRequests from '../../../ajaxRequests.js';
import ProductCard from './ProductCard.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.handleNextProductClick = this.handleNextProductClick.bind(this);
    this.handlePreviousProductClick = this.handlePreviousProductClick.bind(this);
    this.state = {
      currentProductFeatures: [],
      currentProductName: '',
      allProducts: [],
      shownProducts: [],
      hiddenProductsRight: [],
      hiddenProductsLeft: [],
      isNothingHiddenRight: false,
      isNothingHiddenLeft: true
    }
  }

  handleNextProductClick() {
    var updatedShownProducts = this.state.shownProducts;
    var newHidden = updatedShownProducts.shift();
    var updatedHiddenProductsRight = this.state.hiddenProductsRight;
    var newShown = updatedHiddenProductsRight.shift();
    var updatedHiddenProductsLeft = this.state.hiddenProductsLeft;
    updatedHiddenProductsLeft.push(newHidden);
    updatedShownProducts.push(newShown);
    if (updatedHiddenProductsRight.length === 0) {
      this.setState({
        shownProducts: updatedShownProducts,
        hiddenProductsRight: updatedHiddenProductsRight,
        hiddenProductsLeft: updatedHiddenProductsLeft,
        isNothingHiddenRight: true,
        isNothingHiddenLeft: false
      });
    } else {
      this.setState({
        shownProducts: updatedShownProducts,
        hiddenProductsRight: updatedHiddenProductsRight,
        hiddenProductsLeft: updatedHiddenProductsLeft,
        isNothingHiddenLeft: false
      });
    }
  }

  handlePreviousProductClick() {
    var updatedShownProducts = this.state.shownProducts;
    var updatedHiddenProductsLeft = this.state.hiddenProductsLeft;
    var newShown = updatedHiddenProductsLeft.pop();
    updatedShownProducts.unshift(newShown);
    var updatedHiddenProductsRight = this.state.hiddenProductsRight;
    updatedHiddenProductsRight.unshift(updatedShownProducts.pop());
    if (updatedHiddenProductsLeft.length === 0) {
      this.setState({
        shownProducts: updatedShownProducts,
        hiddenProductsLeft: updatedHiddenProductsLeft,
        hiddenProductsRight: updatedHiddenProductsRight,
        isNothingHiddenLeft: true,
        isNothingHiddenRight: false
      });
    } else {
      this.setState({
        shownProducts: updatedShownProducts,
        hiddenProductsLeft: updatedHiddenProductsLeft,
        hiddenProductsRight: updatedHiddenProductsRight,
        isNothingHiddenRight: false
      });
    }
  }

  componentDidMount() {
    ajaxRequests.get('products/' + this.props.currentProductId, data => {
      this.setState({
        currentProductName: data.name,
        currentProductFeatures: data.features
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.relatedProductIds !== prevProps.relatedProductIds && this.props.relatedProductIds.length !== 0) {
      this.setState({
        allProducts: this.props.relatedProductIds,
        shownProducts: this.props.relatedProductIds.slice(0, 4),
        hiddenProductsLeft: [],
        isNothingHiddenLeft: true,
        hiddenProductsRight: this.props.relatedProductIds.slice(4),
        isNothingHiddenRight: this.props.relatedProductIds.length > 4 ? false : true
      });
      ajaxRequests.get('products/' + this.props.currentProductId, data => {
        this.setState({
          currentProductName: data.name,
          currentProductFeatures: data.features
        });
      });
    }
  }

  render() {

    if (this.state.allProducts.length === 0) {
      return (
        <div className='related-products'>
        </div>
      );
    }

    if (!this.state.isNothingHiddenLeft && !this.state.isNothingHiddenRight) {
      return (
        <div className='related-products'>
          <button type='button' className='change-product-button ' onClick={this.handlePreviousProductClick}>&#60;</button>
          {this.state.shownProducts.map(relatedProductId => <ProductCard isRelatedProduct={true} relatedProductId={relatedProductId} key={relatedProductId} currentProductFeatures={this.state.currentProductFeatures} currentProductName={this.state.currentProductName} handleProductDetailRender={this.props.handleProductDetailRender}/>)}
          <button type='button' className='change-product-button' onClick={this.handleNextProductClick}>&#62;</button>
        </div>
      );
    } else if (!this.state.isNothingHiddenRight) {
      return (
        <div className='related-products'>
          {this.state.shownProducts.map(relatedProductId => <ProductCard isRelatedProduct={true} relatedProductId={relatedProductId} key={relatedProductId} currentProductFeatures={this.state.currentProductFeatures} currentProductName={this.state.currentProductName} handleProductDetailRender={this.props.handleProductDetailRender}/>)}
          <button type='button' className='change-product-button' onClick={this.handleNextProductClick}>&#62;</button>
        </div>
      );
    } else if (!this.state.isNothingHiddenLeft) {
      return (
        <div className='related-products'>
          <button type='button' className='change-product-button' onClick={this.handlePreviousProductClick}>&#60;</button>
          {this.state.shownProducts.map(relatedProductId => <ProductCard isRelatedProduct={true} relatedProductId={relatedProductId} key={relatedProductId} currentProductFeatures={this.state.currentProductFeatures} currentProductName={this.state.currentProductName} handleProductDetailRender={this.props.handleProductDetailRender}/>)}
        </div>
      );
    } else {
      return (
        <div className='related-products'>
          {this.state.shownProducts.map(relatedProductId => <ProductCard isRelatedProduct={true} relatedProductId={relatedProductId} key={relatedProductId} currentProductFeatures={this.state.currentProductFeatures} currentProductName={this.state.currentProductName} handleProductDetailRender={this.props.handleProductDetailRender}/>)}
        </div>
      );
    }
  }
}

export default RelatedProducts;