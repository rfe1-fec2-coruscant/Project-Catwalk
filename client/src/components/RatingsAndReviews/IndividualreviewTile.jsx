import React from 'react';

var IndividualReviewTile = (props) => (
  <div>

      <div> {props.rating}  </div>
      <div> {props.reviewDate}</div>
      <div> {props.reviewId} </div>
      <div> {props.summary} </div>
      <div> {props.reviewBody} </div>
      <div> {props.reviewHelpfulness}</div>
  </div>
)

export default IndividualReviewTile;
