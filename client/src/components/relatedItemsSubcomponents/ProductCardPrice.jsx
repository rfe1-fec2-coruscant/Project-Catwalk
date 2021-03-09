import React from 'react';
import ajaxRequests from '../../../ajaxRequests.js';

class ProductCardPrice extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      price: this.props.price,
      salePrice: null,
      relatedProductId: this.props.relatedProductId
    };
  }

  componentDidMount() {
    ajaxRequests.get('products/' + this.state.relatedProductId + '/styles', data => {
      var updatedSalePrice = this.state.salePrice;
      for (var obj of data.results) {
        if (obj['sale_price']) {
          updatedSalePrice = obj['sale_price'];
          break;
        }
      }
      this.setState({ salePrice: updatedSalePrice });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.price !== this.props.price) {
      this.setState({ price: this.props.price });
    }
  }

  render() {
    if (this.state.salePrice) {
      return (
        <div>
          <span className='product-card-text sale-price'>${this.state.salePrice}</span>
          <span className='product-card-text old-price'>{this.state.price}</span>
        </div>
      );
    } else {
      return (
        <span className='product-card-text'>${this.state.price || '(price)'}</span>
      );
    }
  }
}

export default ProductCardPrice;