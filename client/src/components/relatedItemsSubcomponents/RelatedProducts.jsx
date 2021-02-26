import React from 'react';
import ProductCard from './ProductCard.jsx';

var RelatedProducts = ({ relatedProductIds }) => (
  <div>
    <h3>Related Products Carousel</h3>
    {relatedProductIds.map(product => <ProductCard product={product} key={product} />)}
  </div>
);

export default RelatedProducts;