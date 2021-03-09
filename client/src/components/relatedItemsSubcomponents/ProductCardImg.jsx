import React from 'react';
import ajaxRequests from '../../../ajaxRequests.js';

class ProductCardImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }

  componentDidMount() {
    ajaxRequests.get('products/' + this.props.relatedProductId + '/styles', data => {
      var imageUrl = this.state.image;
      for (var obj of data.results) {
        if (obj['default?'] === true) {
          imageUrl = obj.photos[0].thumbnail_url;
          break;
        }
      }
      if (imageUrl === null) {
        imageUrl = data.results[0].photos[0].thumbnail_url;
      }
      this.setState({
        image: imageUrl
      });
    });
  }

  render() {
    var { isRelatedProduct, relatedProductId } = this.props;
    if (isRelatedProduct) {
      return (
        <div className='product-image-container'>
          <img className='product-card-image' src={this.state.image || 'https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg'}></img>
          <div>
            <span className='star-action'><a onClick={this.props.handleStarActionClick}>&#9733;</a></span>
          </div>
        </div>
      )
    } else {
      return (
        <div className='product-image-container'>
          <img className='product-card-image' src={this.state.image || 'https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg'}></img>
          <div>
            <span className='x-action'><a onClick={() => this.props.handleOutfitRemove(relatedProductId) }>&#9447;</a></span>
          </div>
        </div>
      )
    }
  }
}

export default ProductCardImg;