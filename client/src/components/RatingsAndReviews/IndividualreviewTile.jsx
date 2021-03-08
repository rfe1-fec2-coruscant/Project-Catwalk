import React from 'react';

var IndividualReviewTile = (props) => (



  <div id="indvRevContainer">
      <div id="review-id">Review #: {props.reviewId}</div>

      <div id="review-rating">
         Rating:
        {props.renderStars(props.rating)}

      </div>

      <div id="review-date"> Review Date: {props.reviewDate}</div>
      <div id="review-name">{props.reviewerName}</div>
      <div id="review-recommend"> Recommended? {props.recommend ? "Yes!" : "No"}</div>
      <div id="review-summary"> Review Summary: {props.summary} </div>
      <div id="review-body"> Review Body: {props.reviewBody} </div>
      <div id="review-response"> Potential Response to veiwer: {props.response}</div>
      <div id="review-helpfulness"> Review Helpfulness {props.reviewHelpfulness}</div>
      <br></br>
  </div>
)


export default IndividualReviewTile;
