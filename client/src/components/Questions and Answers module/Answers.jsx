import React from 'react'
import Answer from './Answer.jsx'



const Answers = (props) => {
//answers are an object of objects. we want to take that and make it a sorted array of objects
  if (props.answers) {
// //NEXT STEP: sort answers by helpfulness and seller
    var sellerAnswers = [];
    var otherAnswers = [];
    for (var id in props.answers) {
      var answer = props.answers[id];

      //separate the seller answers into their own array
      if (answer.answerer_name === "Seller") {
        sellerArray.push(answer);
      } else {
        otherAnswers.push(answer);
      }
    }

    //helper function sorts by helpfulness
    function compareHelpful(a, b) {
      // Use toUpperCase() to ignore character casing
      const helpfulA = a.helpfulness;
      const helpfulB = b.helpfulness

      let comparison = 0;
      if (helpfulA < helpfulB) {
        comparison = 1;
      } else if (helpfulA > helpfulB) {
        comparison = -1;
      }
      return comparison;
    }
    sellerAnswers.sort(compareHelpful);
    otherAnswers.sort(compareHelpful);
//now answersArray is a correctly sorted array of objects, with sellers answers first, followed by other answers in order of helpfulness
    var answersArray = sellerAnswers.concat(otherAnswers);
    console.log(answersArray[0]);

    return (
      <div>
        <div>
          <b>A: </b>
          <span><Answer
          answer={answersArray[0]}/></span>
        </div>
      </div>
      );
    }
  }

export default Answers;