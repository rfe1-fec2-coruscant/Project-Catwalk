import React from 'react';
import ProductCard from './ProductCard.jsx';

var RelatedProducts = ({ relatedProductIds, currentProductFeatures, currentProductName }) => {
  if (relatedProductIds.length > 0) {
    return (
      <div className='related-products'>
        {relatedProductIds.map(relatedProductId => <ProductCard isRelatedProduct={true} relatedProductId={relatedProductId} key={relatedProductId} currentProductFeatures={currentProductFeatures} currentProductName={currentProductName} />)}
      </div>
    );
  } else {
    return (
      <div className='related-products'>
      </div>
    );
  }
};

export default RelatedProducts;