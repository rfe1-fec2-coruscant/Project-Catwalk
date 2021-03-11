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
      moreQuestionsVisible: true,
    };
  }
componentDidMount() {
  this.setState({questions: this.props.questions});
}

componentDidUpdate(prevProps) {
  if(prevProps.questions !== this.props.questions) {
    this.setState({questions: this.props.questions});
  }
}

  helpfulQuestionClick(e, question) {
    console.log('questionID', question.question_id);
    var path = 'qa/answers/' + question.question_id + '/helpful';
    console.log('path', path);
    ajaxRequests.put(path, (error, results) => {
      // console.log(results);
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

    if(this.state.questions !== undefined) {
      return (
        <div>
            <span>{this.state.questions.slice(0,this.state.length).map((question) => (<Question
           key={question.question_id}
           question={question}
           helpfulQuestionClick={this.helpfulQuestionClick.bind(this)}
           productName="Albert Romper"
           key={question.question_id}
            /> ))}
            </span>
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
