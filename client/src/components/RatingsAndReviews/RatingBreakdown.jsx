import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

const fullStar = <FontAwesomeIcon icon={faStar} />
const halfStar = <FontAwesomeIcon icon={faStarHalf} />

class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      averageRecommendation: 0,
      averageRating: 0
    };

    this.count = 0;
    this.everyPostive = 0;
    this.starRating;

  }

  componentDidMount() {
    this.generateAverageRatingAndRecommendation()
  }

  generateAverageRatingAndRecommendation () {
    this.props.curProductReviews.map((review) => {
      this.count++
      this.setState({ averageRating: (review.rating / this.count) * 5})
      if (review.recommend === true) {
        this.everyPostive++;
      }
      this.setState({ averageRecommendation: (this.everyPostive / this.count) * 100})
    })
  }
  renderStars() {
    var stars = [];
    if (this.state.averageRating % 1 === 0) {
      for(let i = 0; i < this.state.averageRating; i++) {
        stars.push(<span className="rev-star fa fa-star"></span>)
      }
    }
    return stars
  }

  render() {

    return (
      <div id="ratings-breakdown">
        <div>

          <div id="average-rating-container">
            <div id="rev-num-rating">{this.state.averageRating}</div>
            <div id="rev-star-rating">
              {this.renderStars()}
            </div>

            </div>
            <div id="recommendation">
              {this.state.averageRecommendation}% of reviews recommend this Product
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
