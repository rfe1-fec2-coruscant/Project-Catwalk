import React from 'react'
import Upload from './Upload.jsx'
//import ajaxRequests from '../../../photoSubmit.html'

const AddAnswerModal = (props) => {
  const showHideClassName = props.show ? "add-answer-modal display-block" : "add-answer-modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="add-answer-modal-main">
        {props.children}
        <h2 className="header">Submit your Answer</h2>
        <h3 className="answerText">{props.productName}: {props.question["question_body"]} </h3>
        <form className="answerText" >
          <div>
            <label>*Your Answer:</label>
            <input onChange={props.handleAnswerInput} type="text" maxLength="1000"></input>
          </div>
          <div>
            <label>*Your nickname:</label>
            <input onChange={props.handleNicknameInput} type="text" value={props.nicknameInput} maxLength="60"></input>
          </div>
          <div>
            <label>*Your email:</label>
            <input onChange={props.handleEmailInput} type="text" value={props.emailInput}></input>
          </div>
          <div>
            <label>For authentication reasons, you will not be emailed.</label>
          </div>
        </form>
        <h2 className="header">Upload photos:</h2>
          <form action={props.handlePhotoUpload}>
            <Upload
            handlePhotoSelect={props.handlePhotoSelect}
            />
            <button type="button" onClick={props.handleAddAnswerSubmit}>Submit</button>
          </form>
        <button type="button" onClick={props.handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default AddAnswerModal;