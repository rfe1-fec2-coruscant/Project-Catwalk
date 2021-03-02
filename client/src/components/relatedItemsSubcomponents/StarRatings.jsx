import React from 'react';
import ajaxRequests from '../../../ajaxRequests.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

const fullStarElement = <FontAwesomeIcon icon={faStar} />
const halfStarElement = <FontAwesomeIcon icon={faStarHalf} />

class StarRatings extends React.Component {
  constructor(props) {
    super(props);
    this.renderStars = this.renderStars.bind(this);
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

  renderStars(num) {
    var numOfFullStars = num[0];
    var fullStars = [];
    for (var i = 0; i < numOfFullStars; i++) {
      fullStars.push(<span key={i} className="star-icon">{fullStarElement}</span>);
    }
    if (num[2] === '2') {
      fullStars.push(<span key={i}><i className="fa fa-star star-icon-quarter"></i></span>);
    } else if (num[2] === '5') {
      fullStars.push(<span key={i} className="star-icon">{halfStarElement}</span>);
    } else if (num[2] === '7') {
      fullStars.push(<span key={i}><i className="fa fa-star star-icon-three-quarters"></i></span>);
    }
    return (fullStars);
  }

  render() {
    return (
      <div className='star-container'>
        <span>&nbsp;&nbsp;</span>
        {this.renderStars(this.state.starRating)}
      </div>
    );
  };
}

export default StarRatings;