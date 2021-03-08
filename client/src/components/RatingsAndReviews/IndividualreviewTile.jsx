import React from 'react';

var IndividualReviewTile = (props) => (
  <div>Review #: {props.reviewId}
      <div id="review-rating"></div>
      <div id="review-rating"> Rating: {props.rating}  </div>
      <div id="review-date"> Review Date: {props.reviewDate}</div>
      <div id="review-name"> Reviewer Name: {props.reviewerName}</div>
      <div id="review-recommend"> Recommended? {props.recommend ? "true" : "false"}</div>
      <div id="review-summary"> Review Summary: {props.summary} </div>
      <div id="review-body"> Review Body: {props.reviewBody} </div>
      <div id="review-response"> Response to veiwer {props.response}</div>
      <div id="review-helpfulness"> Review Helpfulness {props.reviewHelpfulness}</div>
      <br></br>
  </div>
)

export default IndividualReviewTile;
