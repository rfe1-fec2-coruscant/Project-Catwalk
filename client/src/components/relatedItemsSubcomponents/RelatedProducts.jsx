import React from 'react';
import ProductCard from './ProductCard.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.handleNextProductClick = this.handleNextProductClick.bind(this);
    this.state = {
      allProducts: [],
      shownProducts: [],
      hiddenProductsRight: [],
      hiddenProductsLeft: []
    }
  }

  handleNextProductClick(e) {
    console.log('trying to go right');
    // first ID in shownProducts gets shifted and pushed to hiddenProductsLeft
    var updatedShownProducts = this.state.shownProducts;
    var newHidden = updatedShownProducts.shift();
    // first ID in hiddenProductsRight gets shifted and pushed to shownProducts
    var updatedHiddenProductsRight = this.state.hiddenProductsRight;
    var newShown = updatedHiddenProductsRight.shift();
    var updatedHiddenProductsLeft = this.state.hiddenProductsLeft;
    updatedHiddenProductsLeft.push(newHidden);
    updatedShownProducts.push(newShown);
    this.setState({
      shownProducts: updatedShownProducts,
      hiddenProductsRight: updatedHiddenProductsRight,
      hiddenProductsLeft: updatedHiddenProductsLeft
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.relatedProductIds !== prevProps.relatedProductIds) {
      this.setState({
        allProducts: this.props.relatedProductIds,
        shownProducts: this.props.relatedProductIds.slice(0, 4),
        hiddenProductsRight: this.props.relatedProductIds.slice(4)
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
        <button type='button' className='next-product-button' onClick={this.handleNextProductClick}>&#62;</button>
        {this.state.hiddenProductsRight.map(relatedProductId => <ProductCard isShown={false} isRelatedProduct={true} relatedProductId={relatedProductId} key={relatedProductId} currentProductFeatures={currentProductFeatures} currentProductName={currentProductName} />)}
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
