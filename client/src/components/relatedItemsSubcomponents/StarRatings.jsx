import React from 'react';
import ajaxRequests from '../../../ajaxRequests.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

const fullStarElement = <FontAwesomeIcon icon={faStar} />
const halfStarElement = <FontAwesomeIcon icon={faStarHalf} />

class StarRatings extends React.Component {
  constructor(props) {
    super(props);
    this.renderFullStar = this.renderFullStar.bind(this);
    this.state = {
      relatedProductId: this.props.relatedProductId,
      starRating: 5
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
        starRating: Number(starRating)
      });
    });
  }

  renderFullStar(num) {
    var starString = [];
    for (var i = 0; i < num; i++) {
      starString.push(<span key={i} className="star-icon">{fullStarElement}</span>);
    }
    return (starString);
  }

  render() {
    if (this.state.starRating === 5) {
      return (
        <div className='star-container'>
          <span>&nbsp;&nbsp;</span>
          <span className="star-icon"></span>
          <span className="star-icon"></span>
          <span className="star-icon"></span>
          <span className="star-icon"></span>
          <span className="star-icon"></span>
        </div>
      );
    } else if (this.state.starRating === 3.25 || this.state.starRating === 3.5 || this.state.starRating === 3.75) {
      return (
        <div className='star-container'>
          <span>&nbsp;&nbsp;</span>
          {this.renderFullStar(3)}
          <span className="star-icon">{halfStarElement}</span>
          <span className="star-icon"></span>
        </div>
      );
    } else if (this.state.starRating === 3) {
      return (
        <div className='star-container'>
          <span>&nbsp;&nbsp;</span>
          {this.renderFullStar(3)}
          <span className="star-icon"></span>
          <span className="star-icon"></span>
        </div>
      );
    } else {
      return (
        <div className='star-container'>
          <span>&nbsp;&nbsp;</span>
          {this.renderFullStar(5)}
        </div>
      )
    }
  };

}

export default StarRatings;