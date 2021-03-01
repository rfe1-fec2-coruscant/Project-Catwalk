import React from 'react';
import ProductCard from './ProductCard.jsx';

var RelatedProducts = ({ relatedProductIds }) => (
  <div className='related-products'>
    {relatedProductIds.map(relatedProductId => <ProductCard relatedProductId={relatedProductId} key={relatedProductId} />)}
    <span id="more-button">More</span>
  </div>
);

export default RelatedProducts;