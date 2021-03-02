import React from 'react';
import ajaxRequests from '../../../ajaxRequests.js';

class StarRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductId: this.props.relatedProductId,
      starRating: 0
    };
  }

  componentDidMount() {
    ajaxRequests.get('reviews/meta?product_id=' + this.state.relatedProductId, reviewObject => {
      var starRating = 10;
      console.log('reviewObject.ratings:', reviewObject.ratings);
      this.setState({
        starRating: starRating
      });
    });
  }

  render() {
    return (
      <div className='star-container'>
        <span>&nbsp;&nbsp;</span>
        <span className='star-icon full'>&#9734;</span>
        <span className='star-icon full'>&#9734;</span>
        <span className='star-icon half'>&#9734;</span>
        <span className='star-icon'>&#9734;</span>
        <span className='star-icon'>&#9734;</span>
      </div>
    );
  };

}

export default StarRatings;