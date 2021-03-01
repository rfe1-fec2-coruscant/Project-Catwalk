import React from 'react';
import ProductCard from './ProductCard.jsx';

var RelatedProducts = ({ relatedProductIds, currentProductFeatures }) => (
  <div className='related-products'>
    {relatedProductIds.map(relatedProductId => <ProductCard relatedProductId={relatedProductId} key={relatedProductId} currentProductFeatures={currentProductFeatures}/>)}
  </div>
);

export default RelatedProducts;