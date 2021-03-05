import React from 'react';
import ProductCard from './ProductCard.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.handleNextProductClick = this.handleNextProductClick.bind(this);
    this.state = {
      allProducts: [],
      shownProducts: [],
      hiddenProducts: []
    }
  }

  handleNextProductClick() {
    console.log('trying to go right');
  }

  componentDidUpdate(prevProps) {
    if (this.props.relatedProductIds !== prevProps.relatedProductIds) {
      this.setState({
        allProducts: this.props.relatedProductIds,
        shownProducts: this.props.relatedProductIds.slice(0, 4),
        hiddenProducts: this.props.relatedProductIds.slice(4)
      });
    }
  }

  render() {
    var { currentProductFeatures, currentProductName } = this.props;

    if (this.state.allProducts.length === 0) {
      return (
        <div className='related-products'>
        </div>
      );
    }

    return (
      <div className='related-products'>
        {this.state.shownProducts.map(relatedProductId => <ProductCard isShown={true} isRelatedProduct={true} relatedProductId={relatedProductId} key={relatedProductId} currentProductFeatures={currentProductFeatures} currentProductName={currentProductName} />)}
        <button type='button' className='next-product-button' onClick={this.handleNextProductClick}>&#10006;</button>
        {this.state.hiddenProducts.map(relatedProductId => <ProductCard isShown={false} isRelatedProduct={true} relatedProductId={relatedProductId} key={relatedProductId} currentProductFeatures={currentProductFeatures} currentProductName={currentProductName} />)}
      </div>
    );
  }
}

export default RelatedProducts;

// var RelatedProducts = ({ relatedProductIds, currentProductFeatures, currentProductName }) => {

//   if (relatedProductIds.length === 0) {
//     return (
//       <div className='related-products'>
//       </div>
//     );
//   }

//   var firstFourProductCards = relatedProductIds.slice(0, 4);
//   var remainingProductCards = relatedProductIds.slice(4);
//   console.log('firstFourProductCards:', firstFourProductCards);
//   console.log('remainingProductCards:', remainingProductCards);

//   return (
//     <div className='related-products'>
//       {firstFourProductCards.map(relatedProductId => <ProductCard isShown={true} isRelatedProduct={true} relatedProductId={relatedProductId} key={relatedProductId} currentProductFeatures={currentProductFeatures} currentProductName={currentProductName} />)}
//       {remainingProductCards.map(relatedProductId => <ProductCard isShown={false} isRelatedProduct={true} relatedProductId={relatedProductId} key={relatedProductId} currentProductFeatures={currentProductFeatures} currentProductName={currentProductName} />)}
//     </div>
//   );

// };
