import React from 'react';

var ImageGallery = ({currentProduct}) => (
  <div id="image-gallery">
    <div id="image-gallery-carousel"></div>
    <div id="image-gallery-view">
      <img alt="" src={currentProduct.photos[0].url}></img>
    </div>
  </div>
);

export default ImageGallery;