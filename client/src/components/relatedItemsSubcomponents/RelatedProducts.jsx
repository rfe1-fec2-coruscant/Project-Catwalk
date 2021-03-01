import React from 'react';
import ProductCard from './ProductCard.jsx';

var RelatedProducts = ({ relatedProductIds }) => (
  <div>
    {relatedProductIds.map(relatedProductId => <ProductCard relatedProductId={relatedProductId} key={relatedProductId} />)}
  </div>
);

export default RelatedProducts;

// class RelatedProducts extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       relatedProductIds: this.props.relatedProductIds
//     };
//   }

//   // componentDidUpdate(prevProps) {
//   //   if (prevProps !== this.props) {
//   //     console.log('resetting state for RelatedProducts!');
//   //     console.log('this.state.relatedProductIds:', this.state.relatedProductIds);
//   //     this.setState({
//   //       relatedProducts: this.props.relatedProducts
//   //     });
//   //   }
//   // }

//   render() {
//     var { relatedProductIds } = this.props;
//     return (
//       <div>
//         {this.props.relatedProductIds.map(relatedProductId => {
//           return (
//             <ProductCard relatedProductId={relatedProductId} key={relatedProductId}/>
//           );
//         })}
//       </div>
//     );
//   }
// }

    {/* return (
      <div>
        <h3>Related Products Carousel</h3>
        {this.state.relatedProducts.map(product => {
          console.log('product:', product);
          return (
            <ProductCard product={product} productObject={product.productObject} stylesObject={product.stylesObject} key={product.id} />
          );
        })}
      </div>
    ); */}