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
      averageRating: 0,
      starCounter: {},
      starPercentages:{}

    };

    this.count = 0;
    this.everyPostive = 0;
    this.starRating;
    this.var;

  }

  componentDidMount() {
    this.generateComponentState()

  }

  generateComponentState () {
    let counter = {};
    let perCounter = {}
    this.props.curProductReviews.map((review) => {
      this.count++
      if (counter[review.rating]) {
        counter[review.rating] += 1
      } else {
        counter[review.rating] = 1
      }

      this.setState({ averageRating: (review.rating / this.count) * 5})

      if (review.recommend === true) {
        this.everyPostive++;
      }
      this.setState({ averageRecommendation: (this.everyPostive / this.count) * 100})

    })
    this.setState({ starCounter: counter })

    for (let j = 1; j <= 5; j++) {
      let percentage = (counter[j] / this.count) * 100
      perCounter[j] = percentage
    }
    this.setState({ starPercentages: perCounter })
  }
  renderStars() {
    var stars = [];
    if (this.state.averageRating % 1 === 0) {
      for(let i = 0; i < this.state.averageRating; i++) {
        stars.push(<span className="rev-star fa fa-star"></span>)
      }
    }
    return stars;
  }

  render() {
    console.log('star Percentages',this.state.starPercentages)
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
            <div>One Star</div>
            <div>% of bar filled</div>
            <progress className="bar-graph" id="one-star" value={this.state.starPercentages['1']} max="100"></progress>

            <div>Two Stars:</div>
            <div>% of bar filled</div>
            <progress className="bar-graph" id="two-stars" value={this.state.starPercentages['2']} max="100"></progress>

            <div>Three Stars:</div>
            <div>% of bar filled</div>
            <progress className="bar-graph" id="three-stars" value={this.state.starPercentages['3']}max="100"></progress>

            <div>Four Stars:</div>
            <div>% of bar filled</div>
            <progress className="bar-graph" id="four-stars" value={this.state.starPercentages['4']} max="100"></progress>

            <div>Five Stars: </div>
            <div>% of bar filled</div>
            <progress className="bar-graph" id="five-stars" value={this.state.starPercentages['5']} max="100"></progress>
          </div>

        </div>
      </div>
    )
  }
}

export default RatingsBreakdown;
