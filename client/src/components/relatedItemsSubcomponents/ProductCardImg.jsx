import React from 'react';
import ajaxRequests from '../../../ajaxRequests.js';

class ProductCardImg extends React.Component {
  constructor(props) {
    super(props);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.moduleName = 'ProductCardImg';
    this.timeStampOfMount = new Date();
    this.state = {
      image: null
    };
  }

  handleImageClick(e, moduleName) {
    // console.log(moduleName);
    var clickObject = {
      nodeName: e.target.nodeName,
      moduleName: moduleName,
      dateOfClick: new Date(this.timeStampOfMount.getTime() + e.timeStamp)
    };
    console.log('clickObject:', clickObject);
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
          <img onClick={(e) => this.handleImageClick(e, this.moduleName)} className='product-card-image' src={this.state.image || 'https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg'}></img>
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