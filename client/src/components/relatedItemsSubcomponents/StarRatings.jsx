import React from 'react';
import ajaxRequests from '../../../ajaxRequests.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

const fullStarElement = <FontAwesomeIcon icon={faStar} />
const halfStarElement = <FontAwesomeIcon icon={faStarHalf} />

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
      var scoresTotal = 0;
      var reviewsTotal = 0;
      for (var rating in reviewObject.ratings) {
        reviewsTotal += Number(reviewObject.ratings[rating]);
        scoresTotal += rating * reviewObject.ratings[rating];
      }
      var averageRating = scoresTotal / reviewsTotal;
      var starRating = ((Math.round(averageRating * 4)) / 4).toFixed(2);
      this.setState({
        starRating: starRating
      });
    });
  }

  render() {
    return (
      <div className='star-container'>
        <span>&nbsp;&nbsp;</span>
        <span className="star-icon">{fullStarElement}</span>
        <span className="star-icon">{fullStarElement}</span>
        <span className="star-icon">{fullStarElement}</span>
        <span className="star-icon">{fullStarElement}</span>
        <span className="star-icon">{halfStarElement}</span>
      </div>
    );
  };

}

export default StarRatings;