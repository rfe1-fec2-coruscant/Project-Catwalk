import React from 'react';
import Characteristics from './Characteristics.jsx'

const NewReviewModal = ({ hideModal, shown }) => {
  const showHideClassName = shown ? "modal display-block" : "modal display-none";

  return (

    <div className={showHideClassName}>
      <a type="css" href="./modals.css"></a>
      <form className="modal-main">

        <div required>Overall Rating:
          <input type="radio" className="star-rating" />Poor
          <input type="radio" className="star-rating" />Fair
          <input type="radio" className="star-rating" />Average
          <input type="radio" className="star-rating" />Good
          <input type="radio" className="star-rating" />Great
        </div>

        <div required >Do you recommend this product?
            <input type="radio" className="newRevYes" />Yes
            <input type="radio" className="newRevNo" />Yes
        </div>
        <Characteristics />
        <div>
          Picture Uploader ////Needs Completing
        </div>

        <div>Review Summary:
            <br></br><input type="text" placeholder="Example: Best purchase ever!" maxLength="60" />
        </div>

        <div>Review Body:
          <br></br><textarea id="review-body" name="review-body" placeholder="Why did you like the product or not?" maxLength="1000" minLength="50" required/>
        </div>

        <div>Whats you nickname?
            <br></br><input type="text" placeholder="Example: jackson11!" maxLength="60" required/>
            <br></br><span>For privacy reasons, do not use your full name or email address</span>
        </div>

        <div>Whats your email?
            <br></br><input type="text" placeholder="Example:  jackson11@email.com!" maxLength="60" required/>
          <br></br><span>For authentication reasons, you will not be emailed</span>
        </div>
        <div>
          <input type="submit" onClick={hideModal} value="Submit Review" />
        </div>

      </form>
    </div>
  );
};

export default NewReviewModal;