import React from 'react'
import Question from './Question.jsx'
import ajaxRequests from '../../../ajaxRequests.js';
import AddQuestion from './AddQuestion.jsx'

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      length: 2,
      moreQuestionsVisible: true
    };
  }

  componentDidMount() {
    //sample product ID is arbitrary at this stage
    ajaxRequests.get('qa/questions?product_id=19378', (results) => {
      console.log(results);

    this.sortQuestions(results.results);
    })
  }

  sortQuestions(array) {
    console.log('calling sortQuestions on ', array);
    //sorts questions in order of helpfulness
        //helper function sorts by helpfulness
        function compareHelpful(a, b) {
          const helpfulA = a.question_helpfulness;
          const helpfulB = b.question_helpfulness

          let comparison = 0;
          if (helpfulA < helpfulB) {
            comparison = 1;
          } else if (helpfulA > helpfulB) {
            comparison = -1;
          }
          return comparison;
        }
        array.sort(compareHelpful);

        this.setState({questions: array});
        //set state for whether load more answers button is visible
        if (array.length > 2) {
          this.setState({moreQuestionsVisible: true});
        }
      }


  helpfulQuestionClick(e, question) {
    console.log('questionID', question.question_id);
    var path = 'qa/answers/' + question.question_id + '/helpful';
    console.log('path', path);
    ajaxRequests.put(path, (error, results) => {
      console.log(results);
    });
    //update state with new helpful count
    question.helpfulness++;

    //make it so you can't click it again
    question.helpfulDisabled = true;
    this.setState({questions: this.state.questions});
  }

  loadMoreQuestions() {
    this.setState({length: this.state.length +=2});
  }

  render() {
    const moreQuestionsVisible = this.state.moreQuestionsVisible;
    let moreQuestions;
    if(moreQuestionsVisible && this.state.length <= this.state.questions.length) {
      moreQuestions = <button type="button" className="largeButton" onClick={this.loadMoreQuestions.bind(this)}>MORE ANSWERED QUESTIONS</button>
    } else {
      moreQuestions = <div></div>;
    }

    if(this.state.questions !== []) {
      return (
        <div>
            <span>{this.state.questions.slice(0,this.state.length).map((question) => (<Question
           question={question}
           helpfulQuestionClick={this.helpfulQuestionClick.bind(this)}
           productName="Albert Romper"
            /> ))}
            </span>
          {/* <Question
          question={this.state.questions[1]}
          helpfulQuestionClick={this.helpfulQuestionClick.bind(this)}
          productName="Albert Romper"
          /> */}
          <div>
            <div>{moreQuestions}</div>
            <AddQuestion/>
         </div>
        </div>

        );
    } else {
    return (
      <div>
        <button className="largeButton">ADD A QUESTION +</button>
      </div>
     )
    }
  }

};

export default QuestionList;
