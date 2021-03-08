import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

const fullStar = <FontAwesomeIcon icon={faStar} />
const halfStar = <FontAwesomeIcon icon={faStarHalf} />

class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.count;
    this.averageRating = 3
    this.everyPostive = 0;
    this.averageRecommendation
    this.starRating;

  }

  componentDidMount() {
    // this.generateAverageRatingAndRecommendation()
  }

  generateAverageRatingAndRecommendation () {
    this.props.curProductReviews.map((review) => {
      this.count++
      this.averageRating = review.rating / count

      if (review.recommend === true) {
        this.everyPostive++;
      }
      this.averageRecommendation = this.everyPostive / this.count;
    })
  }
  renderStars() {
    var stars = [];
    if (this.averageRating % 1 === 0) {
      for(let i = 0; i < this.averageRating; i++) {
        stars.push(<span class="rev-star fa fa-star"></span>)
      }
    }
    return stars
  }

  render() {

    return (
      <div id="ratings-breakdown">
        <div>

          <div id="average-rating-container">
            <div id="rev-num-rating">{this.averageRating}</div>
            <div id="rev-star-rating">
              {this.renderStars()}
            </div>

            </div>
            <div id="recommendation">
              98{this.averageRecommendation}% of reviews recommend this Product
            </div>
          <div>

         <div></div>

          </div><br></br>

          <div id="bar-graph-container">Rating Breakdown
          <br></br>
            One Star: <hr className="bar-graph" id="one-star"></hr>
            Two Stars: <hr className="bar-graph" id="two-star"></hr>
            Three Stars: <hr className="bar-graph" id="three-star"></hr>
            Four Stars: <hr className="bar-graph" id="four-star"></hr>
            Five Stars: <hr className="bar-graph" id="five-star"></hr>
          </div>

        </div>
      </div>
    )
  }
}

export default RatingsBreakdown;
