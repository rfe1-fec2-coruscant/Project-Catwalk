import React from 'react';
import ReviewsListItem from './ReviewsListItem.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    if (this.props.curProductReviews) {
      return (
        <div>

          {this.props.curProductReviews.map((review) => {
            return ( <ReviewsListItem
              key={review.review_id}
              reviewId={review.review_id}
              rating={review.rating}
              summary={review.summary}
              reviewBody={review.body}
              reviewDate={review.date}
              reviewHelpfulness={review.helpfulness}
              reviewPhotos={review.photos}
            /> )
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
