import React from 'react';

var IndividualReviewTile = (props) => (



  <div id="indvRevContainer">
      {/* <div id="review-id">Review #: {props.reviewId}</div> */}
      <div className="rating-user-date">
        <div>{props.renderStars(props.rating)}</div>
        <div className="small-text answerBy">
          <div id="review-date">{props.reviewDate}</div>
          <div id="review-name">{props.reviewerName}</div>
        </div>
      </div>
      <div className="bold-text review-summary">{props.summary} </div>
      <div className="regular-text review-response">Response: {props.response}</div>
      <div id="review-recommend"> Recommended? {props.recommend ? "Yes!" : "No"}</div>
      <div className="normal-text" id="review-body">{props.reviewBody} </div>
      <div className="smallButton" id="review-helpfulness">Helpful? {props.reviewHelpfulness}</div>
      <br></br>
  </div>
)


export default IndividualReviewTile;
