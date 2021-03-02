import React from 'react'
import Answers from './Answers.jsx'

const Question = (props) => {


 // console.log(props.question);
  if (props.question) {


    console.log(props.question["question_body"]);

    return (
      <div>
        <div className="question">
          <div >
            <b>Q: </b>
            <b>{props.question["question_body"]}</b>
          </div>
          <div >
            <span className="helpful">Helpful?</span>
            <button className="smallButton">Yes</button>
            <span className="count">(25)</span>
            <span className="divide">|</span>
            <button className="smallButton">Add Answer</button>

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