import React from 'react';
import ProductCard from './ProductCard.jsx';

var RelatedProducts = ({ relatedProducts }) => (
  <div>
    <h3>Related Products Carousel</h3>
    {relatedProducts.map(product => <ProductCard product={product} key={product} />)}
  </div>
);

export default RelatedProducts;