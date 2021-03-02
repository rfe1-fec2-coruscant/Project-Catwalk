import React from 'react';
import IndividualReviewTile from './IndividualReviewTile.jsx';
import SortOptions from './SortOptions.jsx';
class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.boundOnlyRenderTwoTiles = this.onlyRenderTwoTiles.bind(this)
  }

  onlyRenderTwoTiles() {
    let count = 2
    return this.props.curProductReviews.map((review) => {
      if (count === 0) {
        return
      } else {
        count -= 1
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
      }

    })
  }

  render() {
    if (this.props.curProductReviews) {
      return (

        <div>A bunch of Reviews.
          <SortOptions />
          {this.boundOnlyRenderTwoTiles()}
          <button type="button" >More Reviews</button>
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
