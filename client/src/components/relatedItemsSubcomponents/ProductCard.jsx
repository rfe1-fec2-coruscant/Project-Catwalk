import React from 'react';
import ProductCardImg from './ProductCardImg.jsx';
import ajaxRequests from '../../../ajaxRequests.js';

class ProductCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productObject: {},
      category: null,
      name: null,
      price: null
    }
  }

  componentDidMount() {
    ajaxRequests.get('products/' + this.props.relatedProductId, data => {
      this.setState({
        productObject: data,
        category: data.category,
        name: data.name,
        price: data.default_price
      });
    });
  }

  render() {
    var { relatedProductId } = this.props;

    return (
      <div>
        <ProductCardImg relatedProductId={relatedProductId} key={relatedProductId}/>
        <span>{this.state.category || 'category'}&nbsp;|&nbsp;</span>
        <span>{this.state.name || 'name'}&nbsp;|&nbsp;</span>
        <span>{this.state.price || 'price'}</span>
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