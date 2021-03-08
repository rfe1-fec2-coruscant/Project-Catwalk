import React from 'react';

var ImageGallery = ({currentProduct}) => (
  <div id="image-gallery">
    <img alt="" src={currentProduct.photos[0].url}></img>
  </div>
);

export default ImageGallery;