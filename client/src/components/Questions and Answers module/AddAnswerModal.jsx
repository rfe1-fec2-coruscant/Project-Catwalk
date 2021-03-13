import React from 'react'
import Upload from './Upload.jsx'
//import ajaxRequests from '../../../photoSubmit.html'

const AddAnswerModal = (props) => {
  const showHideClassName = props.show ? "add-answer-modal display-block bobmodal" : "add-answer-modal display-none bobmodal";

  return (
    <div className={showHideClassName}>
      <section className="add-answer-modal-main pop-up-modal">
        {props.children}
        <div className="modal-header">
          <h2 className="bold-text">SUBMIT YOUR ANSWER</h2>
          <div className="regular-text">{props.productName}: {props.question["question_body"]} </div>
        </div>
        <form className="answerText modal-form regular-text" >
          {/* <div> */}
            <label className="regular-text input-label-1">*Your Answer:</label>
            <textarea className="input-1 large-input" onChange={props.handleAnswerInput} type="text" maxLength="1000" rows="4" cols="30">
            </textarea>
          {/* </div>
          <div> */}
            <label className="regular-text input-label-2">*Your nickname:</label>
            <div className="input-2">
              <input className="small-input" onChange={props.handleNicknameInput} type="text" value={props.nicknameInput} maxLength="60"></input>
              <div className="small-text">For privacy reasons, do not use your full name or email address</div>
            </div>
          {/* </div>
          <div> */}
            <label className="regular-text input-label-3">*Your email:</label>
            <div className="input-3">
              <input className="small-input" onChange={props.handleEmailInput} type="text" value={props.emailInput}></input>
              <div className="small-text">For authentication reasons, you will not be emailed.</div>
            </div>

          <div className="regular-text input-label-4">Upload photos:</div>
          <div className="input-4" action={props.handlePhotoUpload}>
            <Upload
              handlePhotoSelect={props.handlePhotoSelect}
              />
          </div>

          <div id="add-answer-modal-buttons">
            <button className="modal-button bold-text" type="button" onClick={props.handleAddQuestionSubmit}>Submit Answer</button>
            <button className="small-modal-button regular-text" type="button" onClick={props.handleClose}>
              Close
            </button>
          </div>
        </form>
      </section>
    </div>

  );
};

export default AddAnswerModal;