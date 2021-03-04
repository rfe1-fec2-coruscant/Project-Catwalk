import React from 'react'
import Question from './Question.jsx'
import ajaxRequests from '../../../ajaxRequests.js';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null
    };
  }

  //sample query parameter: https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=20031

  //GET /qa/questions Retrieves a list of questions for a particular product.

  //takes params product_id, page, and count
  componentDidMount() {
    ajaxRequests.get('qa/questions?product_id=19378', (results) => {
      console.log(results);

    this.setState({questions: results.results});
    })

  }

  helpfulQuestionClick(e, question) {
    //post to helpful count
    // alert('helpful!');
    // console.log(question);
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


  render() {
    if(this.state.questions !== null) {
      return (
        <div>
          <Question
           question={this.state.questions[0]}
           helpfulQuestionClick={this.helpfulQuestionClick.bind(this)}/>
          <Question
          question={this.state.questions[1]}
          helpfulQuestionClick={this.helpfulQuestionClick.bind(this)}
          />
        </div>

        );
    } else {
    return (
      <div>
      </div>
     )
    }
  }

};

export default QuestionList;


// export default function QuestionList(props) {


// };