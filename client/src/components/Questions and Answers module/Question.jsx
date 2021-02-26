import React from 'react'
import Answers from './Answers.jsx'

const Question = (props) => {


  console.log(props.question);
  if (props.question) {


    console.log(props.question["question_body"]);

    return (
      <div>
        <div>
          <b>Q: </b>
          <b>{props.question["question_body"]}</b>
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