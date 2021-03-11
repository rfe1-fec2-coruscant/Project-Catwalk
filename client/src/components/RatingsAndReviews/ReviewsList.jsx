import React from 'react';
import IndividualReviewTile from './IndividualReviewTile.jsx';
import SortOptions from './SortOptions.jsx';
class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      length: 2,
      shown: true,
      sorting1: {
        relevant: true,
        helpful: false,
        newest: false
      },

      sorting2: {

      }
    };

    this.count = 2;
    this.count1;
    this.averageRating = 3
    this.everyPostive = 0;
    this.averageRecommendation
    this.starRating;

    this.boundRenderTwoMoreTiles = this.renderTwoMoreTiles.bind(this)
    this.allReviewsCopy = this.props.curProductReviews.slice()
    this.renderStars = this.renderStars.bind(this)
  }

  componentDidMount() {
    let startingTwo = [];
    let i = 0
    for (let review of this.props.curProductReviews) {
      if (i === 2) {
        break;
      }
      startingTwo.push(review);
      i++;

    }
    this.setState({reviews: startingTwo})

  }

  renderTwoMoreTiles() {
    if (this.state.length <= this.props.curProductReviews.length) {
      this.setState({ length: this.state.length += 2 })
    }

    if (this.state.length >= this.props.curProductReviews.length) {
      this.setState({shown: false})
    }

  }

  generateAverageRatingAndRecommendation() {
    this.props.curProductReviews.map((review) => {
      this.count1++
      this.averageRating = review.rating / count1

      if (review.recommend === true) {
        this.everyPostive++;
      }
      this.averageRecommendation = this.everyPostive / this.count1;
    })
  }
  renderStars(averageRating) {
    var stars = [];
    if (averageRating % 1 === 0) {
      for (let i = 0; i < averageRating; i++) {
        stars.push(<span className="rev-star fa fa-star"></span>)
      }
    }
    return stars
  }

  renderButton(){
    if (this.state.shown) {
      return (<button id="more-reviews" type="button" onClick={this.boundRenderTwoMoreTiles}>More Reviews</button>)
    } else {
      return (<div id="rev-button-placeholder"></div>)
    }
 }

  render() {
    if (this.state.reviews.length > 0) {
      // console.log('my props again', this.props)
      return (
        <div id="reviews-list">
          <SortOptions count={this.state.length}/>
          {this.props.curProductReviews.slice(0, this.state.length).map((review) => {
            return (
              <IndividualReviewTile
                key={review.review_id}
                renderStars={this.renderStars}
                reviewId={review.review_id}
                rating={review.rating}
                summary={review.summary}
                reviewBody={review.body}
                reviewDate={review.date}
                reviewHelpfulness={review.helpfulness}
                recommend={review.recommend}
                reviewerName={review.reviewer_name}
                response={review.response}
                reviewPhotos={review.photos}
              />
            )
          })}
          {this.renderButton()}
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }

  }
}


export default ReviewsList;



