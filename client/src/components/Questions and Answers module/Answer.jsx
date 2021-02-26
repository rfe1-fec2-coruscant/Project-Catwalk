import React from 'react'


const Answer = (props) => {


  console.log(props.question);
  if (props.answer) {

    return (

        <span>{props.answer.body}</span>

      );
  }

};

export default Answer;