import React from 'react';

var ImageGalleryCarouselItem = ( {photo} ) => (
  <div className="gallery-thumbnail">
    <img
    alt=""
    src={photo}
    // onClick={changeStyle}
    ></img>
  </div>
)

export default ImageGalleryCarouselItem;