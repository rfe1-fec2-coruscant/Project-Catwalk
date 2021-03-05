import React from 'react';
import ProductCardImg from './ProductCardImg.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import StarRatings from './StarRatings.jsx';
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
    console.log('productId:', productId);
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

  render() {
    var { relatedProductId, currentProductName, isRelatedProduct, isAddCard, isShown } = this.props;

    if (isRelatedProduct && isShown) {
      return (
        <div className='product-card'>
          <ComparisonModal show={this.state.show} handleCloseModal={this.handleCloseModal} productFeatures={this.state.productFeatures} currentProductFeatures={this.state.currentProductFeatures} comparedName={this.state.name} currentProductName={currentProductName} />
          <ProductCardImg handleStarActionClick={this.handleStarActionClick} relatedProductId={relatedProductId} key={relatedProductId} isRelatedProduct={true} />
          <div className='product-card-text-box' id={this.state.productObject.id} onClick={() => this.handleProductCardTextBoxClick(this.state.productId)}>
            <span className='product-card-text'>{this.state.category || 'category'}</span>
            <br></br>
            <span className='product-card-text product-card-name'>{this.state.name || 'name'}</span>
            <br></br>
            <span className='product-card-text'>${this.state.price || '(price)'}</span>
            <StarRatings relatedProductId={relatedProductId} />
          </div>
        </div>
      );
    } else if (isShown) {
      return (
        <div className='product-card your-outfit-card'>
          <ProductCardImg relatedProductId={relatedProductId} key={relatedProductId} handleOutfitRemove={this.props.handleOutfitRemove} />
          <div className='product-card-text-box' id={this.state.productObject.id} onClick={() => this.handleProductCardTextBoxClick(this.state.productId)}>
            <span className='product-card-text'>{this.state.category || 'category'}</span>
            <br></br>
            <span className='product-card-text product-card-name'>{this.state.name || 'name'}</span>
            <br></br>
            <span className='product-card-text'>${this.state.price || '(price)'}</span>
            <StarRatings relatedProductId={relatedProductId} />
          </div>
        </div>
      );
    } else {
      return (
        <div className='product-card your-outfit-card hidden-product-card'>
          <ProductCardImg relatedProductId={relatedProductId} key={relatedProductId} handleOutfitRemove={this.props.handleOutfitRemove} />
          <div className='product-card-text-box' id={this.state.productObject.id} onClick={() => this.handleProductCardTextBoxClick(this.state.productId)}>
            <span className='product-card-text'>{this.state.category || 'category'}</span>
            <br></br>
            <span className='product-card-text product-card-name'>{this.state.name || 'name'}</span>
            <br></br>
            <span className='product-card-text'>${this.state.price || '(price)'}</span>
            <StarRatings relatedProductId={relatedProductId} />
          </div>
        </div>
      );
    }
  }

}

export default ProductCard;

// {product.productObject.name ? product.productObject.name : ''}

// var ProductCard = ({ product }) => (
//   <p>{product.id}</p>
// );

// var ProductCard = ({ product }) => {
//   if (product.productObject) {
//     return (
//       <p>{product.id}</p>
//     );
//   } else {
//     return (
//       <p></p>
//     );
//   }
// }

  // componentDidUpdate(prevProps) {
  //   if (prevProps !== this.props) {
  //     this.setState({
  //       productObject: this.props.productObject,
  //       stylesObject: this.props.stylesObject,
  //       name: this.props.productObject.name
  //     });
  //   }
  // }