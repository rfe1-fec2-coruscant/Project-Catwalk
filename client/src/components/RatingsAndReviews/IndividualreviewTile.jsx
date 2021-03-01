import React from 'react';

var IndividualReviewTile = (props) => (
  <div>Review #: {props.reviewId}
      <div> Rating: {props.rating}  </div>
      <div> Review Date: {props.reviewDate}</div>
      <div> Review Summary: {props.summary} </div>
      <div> Review Body: {props.reviewBody} </div>
      <div> Recommended? {props.recommend}</div>
      <div> Reviewer Name: {props.reviewerName}</div>
      <div> Response to veiwer {props.response}</div>
      <div> Review Helpfulness {props.reviewHelpfulness}</div>
      <br></br>
  </div>
)

export default IndividualReviewTile;
