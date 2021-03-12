import React from 'react'


const AddQuestionModal = (props) => {
  const showHideClassName = props.show ? "add-answer-modal display-block bobmodal" : "add-answer-modal display-none bobmodal";

  return (
    <div className={showHideClassName}>
      <section className="add-answer-modal-main pop-up-modal">
        {props.children}
        <h2 className="header bold-text modal-header">SUBMIT YOUR QUESTION</h2>
        <form className="modal-form answerText regular-text" >
          {/* <div> */}
            <label className="input-label-1">*Your Question:</label>
            <textarea className="input-1 large-input" onChange={props.handleAnswerInput} type="text" maxLength="1000" rows="4" cols="30">
            </textarea>
          {/* </div> */}
          {/* <div> */}
            <label className="regular-text input-label-2">*Your nickname:</label>
            <div className="input-2">
              <input className="small-input" onChange={props.handleNicknameInput} type="text" value={props.nicknameInput} maxLength="60"></input>
              <div className="small-text">For privacy reasons, do not use your full name or email address</div>
            </div>
          {/* </div> */}
          {/* <div> */}
            <label className="regular-text input-label-3">*Your email:</label>
            <div className="input-3">
              <input className="small-input" onChange={props.handleEmailInput} type="text" value={props.emailInput}></input>
              <div className="small-text">For authentication reasons, you will not be emailed.</div>

            </div>
          {/* </div> */}
        <div className="modal-buttons">
          <button className="modal-button bold-text" type="button" onClick={props.handleAddQuestionSubmit}>Submit Question</button>
          <button className="small-modal-button regular-text" type="button" onClick={props.handleClose}>
            Close
          </button>
        </div>
        </form>
      </section>
    </div>

  );
};

export default AddQuestionModal;