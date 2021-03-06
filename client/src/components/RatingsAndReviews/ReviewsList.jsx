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
    this.startCount = 0;
    this.boundOnlyRenderTwoTiles = this.onlyRenderTwoTiles.bind(this)
    this.boundOnlyRenderTwoTiles = this.onlyRenderTwoTiles.bind(this)
    this.boundRenderTwoStartReviews = this.renderTwoStartReviews.bind(this)
    // this.allReviewsCopy = this.props.curProductReviews.slice()
  }

  componentDidMount() {

  }

  // renderMoreTiles() {
  //   let tempReviews = [];
  //   for (let i = this.count; i < this.count; i++) {
  //     if (this.props.curProductReviews.length) {
  //       tempReviews.push(this.props.curProductReviews[i])
  //     }
  //   }
  //  this.setState({reviews: tempReviews})
  // }

  onlyRenderTwoTiles() {
    if (this.state.reviews.length > 1) {
      return this.state.reviews.map((review) => {
        this.count += 1
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
      })
    } else if (this.state.reviews.length === 1) {
      this.count += 1
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
    } else {
      return
    }
  }

  renderTwoStartReviews() {
    while (this.startCount < 2) {
      return this.state.reviews.map((review) => {
        this.startCount += 1
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
      })
    }
  }

  render() {
    if (this.props.curProductReviews) {
      return (
        <div>A bunch of Reviews.
          <SortOptions />
          {this.boundRenderTwoStartReviews()}
          <button type="button" onClick={this.boundRenderMoreTiles}>More Reviews</button>
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
