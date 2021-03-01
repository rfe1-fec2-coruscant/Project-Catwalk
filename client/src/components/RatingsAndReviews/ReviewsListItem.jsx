import React from 'react';

var ReviewsListItem = (props) => (
  <div>
      <div>hello there, im a review an a list item</div>
      <div>{props.reviewId}</div>
      <div> {props.rating} | {props.summary}</div>
      <div> {props.reviewBody} | {props.reviewDate}</div>
      <div> {props.reviewHelpfulness}</div>
  </div>
)

export default ReviewsListItem;
