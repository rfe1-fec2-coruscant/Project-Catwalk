import React from 'react';
import ProductCardImg from './ProductCardImg.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import StarRatings from './StarRatings.jsx';
import ProductCardPrice from'./ProductCardPrice.jsx';
import ajaxRequests from '../../../ajaxRequests.js';

class ProductCard extends React.Component {

  constructor(props) {
    super(props);
    this.handleStarActionClick = this.handleStarActionClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleProductCardTextBoxClick = this.handleProductCardTextBoxClick.bind(this);
    this.state = {
      productId: this.props.relatedProductId,
      show: false,
      productObject: {},
      currentProductFeatures: this.props.currentProductFeatures,
      productFeatures: [],
      category: null,
      name: null,
      price: null
    }
  }

  handleStarActionClick() {
    if (this.state.show) {
      return;
    }
    this.setState({ show: true });
  }

  handleCloseModal() {
    this.setState({ show: false });
  }

  handleProductCardTextBoxClick(productId) {
    if (productId[0] === 'Y') {
      productId = productId.slice(3);
      console.log('productId:', productId);
    }
    this.props.handleProductDetailRender(productId);
  }

  componentDidMount() {
    ajaxRequests.get('products/' + this.props.relatedProductId, data => {
      this.setState({
        productObject: data,
        productFeatures: data.features,
        category: data.category,
        name: data.name,
        price: data.default_price
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProductFeatures !== prevProps.currentProductFeatures) {
      this.setState({
        currentProductFeatures: this.props.currentProductFeatures
      });
    }
  }

  render() {
    var { relatedProductId, currentProductName, isRelatedProduct, isAddCard } = this.props;

    if (isRelatedProduct) {
      return (
        <div className='product-card'>
          <ComparisonModal show={this.state.show} handleCloseModal={this.handleCloseModal} productFeatures={this.state.productFeatures} currentProductFeatures={this.state.currentProductFeatures} comparedName={this.state.name} currentProductName={currentProductName} />
          <ProductCardImg handleStarActionClick={this.handleStarActionClick} relatedProductId={relatedProductId} key={relatedProductId} isRelatedProduct={true} />
          <div className='product-card-text-box' id={this.state.productObject.id} onClick={() => this.handleProductCardTextBoxClick(this.state.productId)}>
            <span className='product-card-text'>{this.state.category || 'category'}</span>
            <br></br>
            <span className='product-card-text product-card-name'>{this.state.name || 'name'}</span>
            <br></br>
            {/* <span className='product-card-text'>${this.state.price || '(price)'}</span> */}
            <ProductCardPrice relatedProductId={relatedProductId} price={this.state.price}/>
            <StarRatings relatedProductId={relatedProductId} />
          </div>
        </div>
      );
    } else {
      return (
        <div className='product-card your-outfit-card'>
          <ProductCardImg relatedProductId={relatedProductId} key={'YO: ' + relatedProductId} handleOutfitRemove={this.props.handleOutfitRemove} />
          <div className='product-card-text-box' id={this.state.productObject.id} onClick={() => this.handleProductCardTextBoxClick(this.state.productId)}>
            <span className='product-card-text'>{this.state.category || 'category'}</span>
            <br></br>
            <span className='product-card-text product-card-name'>{this.state.name || 'name'}</span>
            <br></br>
            {/* <span className='product-card-text'>${this.state.price || '(price)'}</span> */}
            <ProductCardPrice relatedProductId={relatedProductId} price={this.state.price}/>
            <StarRatings relatedProductId={relatedProductId} />
          </div>
        </div>
      );
    }
  }

}

export default ProductCard;