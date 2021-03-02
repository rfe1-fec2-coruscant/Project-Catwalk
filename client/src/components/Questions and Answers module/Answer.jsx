import React from 'react';
import moment from 'moment';

const Answer = (props) => {


  if (props.answer) {
    console.log(props.answer);
    var date = props.answer.date;
    var newDate = moment(date).format('MMM Do, YYYY');
    return (
      <div className="answer">
        <div className= "answerText">{props.answer.body}</div>
        <section className="answerBy">
          <span>by {props.answer.answerer_name}</span>
          <span className = "date">{newDate}</span>
          <span className="divide">|</span>
          <span className="helpful">Helpful?
            <button className="smallButton">Yes</button>
            <span className = "count">(25)</span>
            <span className="divide">|</span>
            <button className="smallButton">Report</button>
          </span>
        </section>
      </div>
      );

  } else {
    return (
      <div></div>
    );
  }

};

export default Answer;