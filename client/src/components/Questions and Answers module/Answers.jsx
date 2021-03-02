import React from 'react'
import Answer from './Answer.jsx'


class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 2,
      answersArray: [],
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
      this.setState({answersArray: sellerAnswers.concat(otherAnswers)
      });
    }
  }





  render() {

    return (
      <div>
        <div className="answers">
          <div>
            <b>A: </b>
          </div>
          <div>
            <span>{this.state.answersArray.slice(0,this.state.length).map((answer) => (<Answer
            answer={answer}/> ))}
            </span>
            {/* <span><Answer
            answer={this.state.answersArray[1]}/>
            </span> */}
            <button className="moreAnswers"
            onClick={this.loadMoreAnswers.bind(this)}>LOAD MORE ANSWERS</button>
          </div>
        </div>
      </div>
      );
    }
  }

export default Answers;