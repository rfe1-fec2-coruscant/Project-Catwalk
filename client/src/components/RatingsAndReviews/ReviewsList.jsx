import React from 'react';
import IndividualReviewTile from './IndividualReviewTile.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    if (this.props.curProductReviews) {
      return (
        <div>A bunch of Reviews, sorted by Nothing rn.

          {this.props.curProductReviews.map((review) => {
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
