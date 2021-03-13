import React from 'react';

import ImageGalleryView from './ImageGalleryView.jsx';
import ImageGalleryCarouselItem from './ImageGalleryCarouselItem.jsx';

// var ImageGallery = ({currentProduct}) =>

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0
    };
    this.count = 0;
  }


  render () {
    return(
      <div id="image-gallery">
        <div id="image-gallery-carousel">
          {this.props.currentProduct.photos.map((photo) => {
            this.count += 1
            return(
              <ImageGalleryCarouselItem key={this.count} photo={photo.thumbnail_url}/>
            );
          })}
        </div>
        <ImageGalleryView image={this.props.currentProduct.photos[this.state.imageIndex].url} />
      </div>
    );
  }
}

export default ImageGallery;