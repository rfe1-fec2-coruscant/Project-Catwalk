import React from 'react';
import ProductCard from './ProductCard.jsx';

class RelatedProducts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: this.props.relatedProducts
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      console.log('resetting state!:', this.props);
      this.setState({
        relatedProducts: this.props.relatedProducts
      });
    }
  }

  render() {
    return (
      <div>
        <h3>Related Products Carousel</h3>
        {this.state.relatedProducts.map(product => {
          console.log('product:', product);
          return (
            <ProductCard product={product} productObject={product.productObject} stylesObject={product.stylesObject} key={product.id} />
          );
        })}
      </div>
    );
  }
}

// ({ relatedProducts }) => {

//   console.log('relatedProducts:', relatedProducts);

//   return (
//     <div>
//       <h3>Related Products Carousel</h3>
//       {relatedProducts.map(product => {
//         console.log('product:', product);
//         return (
//           <ProductCard productObject={product.productObject} stylesObject={product.stylesObject} key={product.id} />
//         );
//       })}
//     </div>
//   );

// }

export default RelatedProducts;

// var RelatedProducts = ({ relatedProducts }) => {

//   console.log('relatedProducts:', relatedProducts);

//   return (
//     <div>
//       <h3>Related Products Carousel</h3>
//       {relatedProducts.map(product => {
//         console.log('product:', product);
//         return (
//           <ProductCard productObject={product.productObject} stylesObject={product.stylesObject} key={product.id} />
//         );
//       })}
//     </div>
//   );

// }

// var RelatedProducts = ({ relatedProducts }) => (
//   <div>
//     <h3>Related Products Carousel</h3>
//     {relatedProducts.map(product => {
//       console.log('product:', product);
//       return (
//         <ProductCard product={product} key={product.id} />
//       );
//     })}
//   </div>
// );