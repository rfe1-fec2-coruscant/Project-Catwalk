import React from 'react';
import Characteristics from './Characteristics.jsx'

const NewReviewModal = ({ hideModal, shown }) => {
  const showHideClassName = shown ? "modal display-block" : "modal display-none";

  return (

    <div className={showHideClassName}>
      <a type="css" href="./modals.css"></a>
      <form className="modal-main">

        <div className="rev-modal-input1" id="rev-overall-rating" required>Overall Rating:
          <input type="radio" className="star-rating" />Poor
          <input type="radio" className="star-rating" />Fair
          <input type="radio" className="star-rating" />Average
          <input type="radio" className="star-rating" />Good
          <input type="radio" className="star-rating" />Great
        </div>

        <div id="rev-recommended" className="rev-modal-input1" required >Do you recommend this product?
            <input type="radio" className="newRevYes" />Yes
            <input type="radio" className="newRevNo" />No
        </div>

        <Characteristics />

        <div id="nickname" className="rev-modal-input" >Whats you nickname?
            <br></br><input type="text" className="rev-input" placeholder="Example: jackson11!" maxLength="60" required />
          <br></br><p> For privacy reasons, do not use </p>
          <p> your full name or email address.</p>
          <div ></div>
        </div>

        <div id="rev-summary" className="rev-modal-input" >Review Summary:
            <br></br><input type="text" placeholder="Example: Best purchase ever!" maxLength="60" />
        </div>

        <div id="rev-body" className="rev-modal-input" >Review Body:
          <br></br><textarea id="rev-body-input" className="rev-input" name="review-body" placeholder=" Why did you like the product or not?" maxLength="1000" minLength="50" required/>
        </div>



        <div id="rev-email" className="rev-modal-input" >Whats your email?
            <br></br><input className="rev-input" type="text" placeholder="Example:  jackson11@email.com!" maxLength="60" required/>
          <br></br><span id="rev-email-txt">For authentication reasons, you will not be emailed.</span>
        </div>

        <div id="new-review-photo-uploader" className="rev-modal-input" >Upload A Photo
          <br></br><input className="rev-input" type="file" name="photo-uploader" />
        </div>

        <div id="new-rev-submit">
          <input  type="submit" onClick={hideModal} value="Submit Review" />
        </div>

      </form>
    </div>
  );
};

export default NewReviewModal;

