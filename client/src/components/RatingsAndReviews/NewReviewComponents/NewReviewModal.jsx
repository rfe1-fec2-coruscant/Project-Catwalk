import React from 'react';
import Characteristics from './Characteristics.jsx'
const NewReviewModal = ({ hideModal, shown }) => {
  const showHideClassName = shown ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <form className="modal-main">
        <div>Overall Rating
          <input type="radio" className="star-rating" />Poor
          <input type="radio" className="star-rating" />Fair
          <input type="radio" className="star-rating" />Average
          <input type="radio" className="star-rating" />Good
          <input type="radio" className="star-rating" />Great
        </div>

        <div>Do you recommend this product?
            <input type="radio" className="newRevYes" />Yes
            <input type="radio" className="newRevNo" />Yes
        </div>
        <Characteristics />
        <div>Review Body</div>
        <div>Whats you nickname</div>
        <div>Whats your email</div>
        <div>
          <input type="submit" onClick={hideModal} value="Submit Review" />
        </div>

      </form>
    </div>
  );
};

export default NewReviewModal;