import React from 'react';
import moment from 'moment';

const Answer = (props) => {


  if (props.answer) {
    //console.log(props.answer);
    var date = props.answer.date;
    var newDate = moment(date).format('MMM Do, YYYY');
// seller's name, if it exists, rendered in bold
    if (props.answer.answerer_name === "Seller") {
      var seller = <span className="seller">Seller</span>;
    } else {
      var seller = <span>{props.answer.answerer_name}</span>
    }
 //helpful link disabled after one use
    if (props.answer.helpfulDisabled === true) {
      var helpfulness = <span>Yes</span>;
    } else {
      var helpfulness = <button className="smallButton" onClick={(e) => props.helpfulAnswerClick(e, props.answer)}>Yes</button>
    }

     //reported link disabled after one use
     if (props.answer.reportedDisabled === true) {
      var reported = <span>Reported</span>;
    } else {
      var reported = <button className="smallButton" onClick={(e) => props.reportedClick(e, props.answer)}>Report</button>
    }
    return (
      <div className="answer">
        <div className= "regular-text answerText">{props.answer.body}</div>
        <section className="small-text answerBy">
          <span>by {seller}</span>
          <span className = "small-text date">{newDate}</span>
          <span className="regular-text divide">|</span>
          <span className="small-text helpful">Helpful?
            {helpfulness}
            <span className = "small-text count">{props.answer.helpfulness}</span>
            <span className="regular-text divide">|</span>
            <span>{reported}</span>
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