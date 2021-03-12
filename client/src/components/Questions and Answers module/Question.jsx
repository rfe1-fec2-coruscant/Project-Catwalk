import React from 'react'
import Answers from './Answers.jsx'
import AddAnswer from './AddAnswer.jsx'

const Question = (props) => {


 // console.log(props.question);
  if (props.question) {


    // console.log(props.question["question_body"]);
     //helpful link disabled after one use
     if (props.question.helpfulDisabled === true) {
      var helpfulness = <span className="small-text">Yes</span>;
    } else {
      var helpfulness = <button className="smallButton" onClick={(e) => props.helpfulQuestionClick(e, props.question)}>Yes</button>
    }

    return (
      <div>
        <div className="question">
          <div className="bold-text">
            <b className="question-body">Q: </b>
            <b>{props.question["question_body"]}</b>
          </div>
          <div >
            <span className="small-text helpful" >Helpful?</span>
            <span>{helpfulness}</span>
            <span className="small-text count">{props.question.question_helpfulness}</span>
            <span className="regular-text divide">|</span>
            <span><AddAnswer
            productName={props.productName}
            question={props.question}
            // handleAddAnswerSubmit={props.handleAddAnswerSubmit}
            /></span>
            {/* <button className="smallButton">Add Answer</button> */}

           </div>
         </div>
        <div>
          <Answers
          answers={props.question.answers}/>
        </div>
      </div>
      );
  }

 return (
  <div>
  </div>
  );

};

export default Question;