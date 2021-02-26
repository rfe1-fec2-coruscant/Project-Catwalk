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


  render() {
  return (
    <div>
      <div>Questions and Answers Module</div>
      <Question
      question={this.state.questions[0]}/>
    </div>

    );
  }
};

export default QuestionList;


// export default function QuestionList(props) {
//   return (
//     <div>
//       <div>Questions and Answers Module</div>
//       <Question/>
//     </div>

//   )

// };