import React from 'react';

class ProductCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productObject: {},
      stylesObject: {},
      name: 'placeholder'
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        productObject: this.props.productObject,
        stylesObject: this.props.stylesObject,
        name: this.props.productObject.name
      });
    }
  }

  render() {
    // var { productObject, stylesObject } = this.props;

    return (
      <p>{this.state.name}</p>
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