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
      var imageUrl;
      for (var obj of data.results) {
        if (obj['default?'] === true) {
          imageUrl = obj.photos[0].thumbnail_url;
          break;
        }
      }
      this.setState({
        image: imageUrl
      });
    });
  }

  render() {
    return (
      <div className='product-image-container'>
        <img className='product-card-image' src={this.state.image || 'https://images.unsplash.com/11/converse-fields.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'}></img>
        <div>
          <span className='star-action'><a onClick={this.props.handleStarActionClick}>&#9733;</a></span>
        </div>
      </div>
    )
  }
}

export default ProductCardImg;