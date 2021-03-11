import React from 'react';

const ProductCardImgTag = ({ img }) => (
  <img className='product-card-image' src={img || 'https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg'}></img>
);

export default ProductCardImgTag;