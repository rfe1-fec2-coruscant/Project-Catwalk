import React from 'react'


const AddQuestionModal = (props) => {
  const showHideClassName = props.show ? "add-answer-modal display-block" : "add-answer-modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="add-answer-modal-main">
        {props.children}
        <h2 className="header">Submit your Question</h2>
        <form className="answerText" >
          <div>
            <label>*Your Question:</label>
            <input onChange={props.handleAnswerInput} type="text" maxLength="1000"></input>
          </div>
          <div>
            <label>*Your nickname:</label>
            <input onChange={props.handleNicknameInput} type="text" value={props.nicknameInput} maxLength="60"></input>
            <div>For privacy reasons, do not use your full name or email address</div>
          </div>
          <div>
            <label>*Your email:</label>
            <input onChange={props.handleEmailInput} type="text" value={props.emailInput}></input>
          </div>
          <div>
            <label>For authentication reasons, you will not be emailed.</label>
          </div>
        </form>
            <button type="button" onClick={props.handleAddQuestionSubmit}>SubmitQuestion</button>
        <button type="button" onClick={props.handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default AddQuestionModal;