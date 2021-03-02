import React from 'react';
import moment from 'moment';

const Answer = (props) => {


  console.log(props.answer);
  if (props.answer) {

    var date = props.answer.date;
    var newDate = moment(date).format('MMM Do, YYYY');



    return (
      <div classname="answer">
        <div className= "answerText">{props.answer.body}</div>
        <section className="answerBy">
          <span>by {props.answer.answerer_name}</span>
          <span className = "date">{newDate}</span>
          <span className="divide">|</span>
          <helpful className="helpful">Helpful?
            <button className="smallButton">Yes</button>
            <count className = "count">(25)</count>
            <span className="divide">|</span>
            <button className="smallButton">Report</button>
          </helpful>
        </section>
      </div>


      );
  }

};

export default Answer;