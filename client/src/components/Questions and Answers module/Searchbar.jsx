import React from 'react'
import ajaxRequests from '../../../ajaxRequests.js';
import QuestionList from './QuestionList.jsx'


class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      searchTerm: ''
    };
  }

  componentDidMount() {
    //sample product ID is arbitrary at this stage
    ajaxRequests.get('qa/questions?product_id=19378', (results) => {
      // console.log(results);

    this.sortQuestions(results.results);
    })
  }

  sortQuestions(array) {
    // console.log('calling sortQuestions on ', array);
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
      }

      editSearchTerm(e) {
        this.setState({searchTerm: e.target.value});
      }

      dynamicSearch() {
        if (this.state.searchTerm.length >= 3) {
          return this.state.questions.filter(question => question.question_body.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        } else {
          return this.state.questions
        }
      }

  render() {
    if(this.state.questions !== []) {
    return (
      <div>
        <input id="searchbar" type="text" onChange={this.editSearchTerm.bind(this)} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."></input>
        <QuestionList questions={this.dynamicSearch()}/>
      </div>
      );
    }

  }



};

export default Searchbar;