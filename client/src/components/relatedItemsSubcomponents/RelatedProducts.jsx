import React from 'react';
import ProductCard from './ProductCard.jsx';

var RelatedProducts = ({ relatedProductIds, currentProductFeatures, currentProductName }) => (
  <div className='related-products'>
    {relatedProductIds.map(relatedProductId => <ProductCard relatedProductId={relatedProductId} key={relatedProductId} currentProductFeatures={currentProductFeatures} currentProductName={currentProductName}/>)}
  </div>
);

export default RelatedProducts;