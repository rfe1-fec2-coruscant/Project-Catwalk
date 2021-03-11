import React from 'react'
import Answers from './Answers.jsx'
import AddAnswer from './AddAnswer.jsx'

const Question = (props) => {


 // console.log(props.question);
  if (props.question) {


    // console.log(props.question["question_body"]);
     //helpful link disabled after one use
     if (props.question.helpfulDisabled === true) {
      var helpfulness = <span>Yes</span>;
    } else {
      var helpfulness = <button className="smallButton" onClick={(e) => props.helpfulQuestionClick(e, props.question)}>Yes</button>
    }

    return (
      <div>
        <div className="question bold-text">
          <div >
            <b>Q: </b>
            <b>{props.question["question_body"]}</b>
          </div>
          <div >
            <span className="helpful">Helpful?</span>
            <span>{helpfulness}</span>
            <span className="count">{props.question.question_helpfulness}</span>
            <span className="divide">|</span>
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