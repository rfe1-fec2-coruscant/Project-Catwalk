import React from 'react';
import ProductCardInfo from './ProductCardInfo.jsx';
import ajaxRequests from '../../../ajaxRequests.js';

class ProductCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productObject: {},
      stylesObject: {},
      name: null
    }
  }

  componentDidMount() {
    ajaxRequests.get('products/' + this.props.relatedProductId, data => {
      this.setState({
        productObject: data,
        name: data.name
      });
    });
  }

  render() {

    return (
      <p>{this.state.name || 'placeholder'}</p>
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