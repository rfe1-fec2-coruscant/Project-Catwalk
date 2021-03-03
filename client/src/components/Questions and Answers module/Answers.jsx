import React from 'react'
import Answer from './Answer.jsx'
import ajaxRequests from '../../../ajaxRequests.js';


class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 2,
      answersArray: [],
      loadMoreVisible: false
    };
  }
//const Answers = (props) => {
//answers are an object of objects. we want to take that and make it a sorted array of objects

componentDidMount() {
  this.sortAnswers();

}

loadMoreAnswers() {
  this.setState({length: this.state.answersArray.length, renderArray: this.state.answersArray.slice(0, length)});
}

helpfulAnswerClick(e, answer) {
  //post to helpful count
  console.log('answerID', answer.id);
  var path = 'qa/answers/' + answer.id + '/helpful';
  console.log('path', path);
  ajaxRequests.put(path, (error, results) => {
    console.log(results);
  });
  //update state with new helpful count
  answer.helpfulness++;

  //make it so you can't click it again
  answer.helpfulDisabled = true;
  this.setState({answersArray: this.state.answersArray});
}

reportedClick(e, answer) {
  //PUT to reported url
  var path = 'qa/answers/' + answer.id + '/report';
  ajaxRequests.put(path, (error, results) => {
    console.log(results);
  });
  //make it so you can't click it again
  answer.reportedDisabled = true;
  this.setState({answersArray: this.state.answersArray});
}
  sortAnswers () {
    // (function() {
    if (this.props.answers) {
      var sellerAnswers = [];
      var otherAnswers = [];
      for (var id in this.props.answers) {
        var answer = this.props.answers[id];
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
      var sortedArray = sellerAnswers.concat(otherAnswers);
      this.setState({answersArray: sortedArray
      });
      //set state for whether load more answers button is visible
      if (sortedArray.length > 2) {
        this.setState({loadMoreVisible: true});
      }
    }
  }





  render() {
    const loadMoreVisible = this.state.loadMoreVisible;
    let button;
    if(loadMoreVisible) {
      button= <button className="moreAnswers"
      onClick={this.loadMoreAnswers.bind(this)}>LOAD MORE ANSWERS</button>;
    } else {
      button = <div></div>;
    }

    return (
      <div>
        <div className="answers">
          <div>
            <b>A: </b>
          </div>
          <div>
            <span>{this.state.answersArray.slice(0,this.state.length).map((answer) => (<Answer
            answer={answer}
            helpfulAnswerClick={this.helpfulAnswerClick.bind(this)}
            reportedClick={this.reportedClick.bind(this)}/> ))}
            </span>
            <span>{button}</span>
            {/* <button className="moreAnswers"
            onClick={this.loadMoreAnswers.bind(this)}>LOAD MORE ANSWERS</button> */}
          </div>
        </div>
      </div>
      );
    }
  }

export default Answers;