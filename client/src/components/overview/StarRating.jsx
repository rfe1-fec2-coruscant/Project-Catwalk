import React from 'react';

var StarRating = ( {reviews} ) => {

  if (reviews.num === 0) {
    return(
      <div id="star-rating">
      {/* Star Rating: */}
        <span>
          No Reviews Submitted
        </span>
    </div>
    );
  }
  // console.log(rating);
  let ratingQuarters = reviews.rating * 4;
  let starsArray = [];

  for (var i = 0; i < 5; i++) {
    if (ratingQuarters < 4) {
      let starType = `star${ratingQuarters} fa fa-star`;
      starsArray.push(<span key={i}><i className={starType}></i></span>);
      ratingQuarters = 0;
    } else {
      starsArray.push(<span key={i}><i className="star fa fa-star"></i></span>);
      ratingQuarters -= 4;
    }
  }

  return(
    <div className="star" id="star-rating">
      {/* Star Rating: */}
        <span>
          {starsArray}
        </span>
        <a className="smallButton" href="#reviews-component">See all {reviews.num} reviews</a>
    </div>
  );
}

export default StarRating;