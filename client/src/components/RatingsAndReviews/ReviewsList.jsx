import React from 'react';
import IndividualReviewTile from './IndividualReviewTile.jsx';
import SortOptions from './SortOptions.jsx';
class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };

    this.count = 2;

    this.boundRenderTwoMoreTiles = this.renderTwoMoreTiles.bind(this)
    this.allReviewsCopy = this.props.curProductReviews.slice()
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
    let i = 0;
    let curReviews = this.state.reviews.slice();
    for (let j = this.count; j < this.props.curProductReviews; j++) {
      if (i === 2) {
        break;
      }
      curReviews.push(this.props.curProductReviews[j])
      i++
    }
    this.setState({reviews: curReviews})
  }


  render() {
    if (this.state.reviews.length > 0) {
      console.log('more state', this.state.reviews)
      // console.log('my props again', this.props)
      return (
        <div id="reviews-list">
          <SortOptions count={this.props.curProductCount}/>
          {this.state.reviews.map((review) => {
            return (
              <IndividualReviewTile
                key={review.review_id}
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
          <button type="button" onClick={this.boundRenderTwoMoreTiles}>More Reviews</button>
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



