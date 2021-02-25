import React from 'react';
import ProductCard from './ProductCard.jsx';

var RelatedProducts = ({ products }) => (
  <div>
    <h3>Related Products Carousel</h3>
    {products.map(product => <ProductCard product={product} key={product.id} />)}
  </div>
);

export default RelatedProducts;