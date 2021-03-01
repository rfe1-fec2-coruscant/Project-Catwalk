import React from 'react';
import ProductCardImg from './ProductCardImg.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import ajaxRequests from '../../../ajaxRequests.js';

class ProductCard extends React.Component {

  constructor(props) {
    super(props);
    this.handleProductCardClick = this.handleProductCardClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.state = {
      show: false,
      productObject: {},
      currentProductFeatures: this.props.currentProductFeatures,
      productFeatures: [],
      category: null,
      name: null,
      price: null
    }
  }

  handleProductCardClick() {
    if (this.state.show) {
      return;
    }
    this.setState({ show: true });
  }

  handleCloseModal() {
    this.setState({ show: false });
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
    var { relatedProductId } = this.props;

    return (
      <div className='product-card' onClick={this.handleProductCardClick}>
        <ComparisonModal show={this.state.show} handleCloseModal={this.handleCloseModal} productFeatures={this.state.productFeatures} currentProductFeatures={this.state.currentProductFeatures}/>
        <ProductCardImg relatedProductId={relatedProductId} key={relatedProductId} />
        <br></br>
        <br></br>
        <span className='product-card-text'>{this.state.category || 'category'}</span>
        <br></br>
        <span className='product-card-text'>{this.state.name || 'name'}</span>
        <br></br>
        <span className='product-card-text'>${this.state.price || '(price)'}</span>
        <div className='star-container'>
          <span>&nbsp;&nbsp;</span>
          <span className='star-icon full'>&#9734;</span>
          <span className='star-icon full'>&#9734;</span>
          <span className='star-icon half'>&#9734;</span>
          <span className='star-icon'>&#9734;</span>
          <span className='star-icon'>&#9734;</span>
        </div>
      </div>
    );
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