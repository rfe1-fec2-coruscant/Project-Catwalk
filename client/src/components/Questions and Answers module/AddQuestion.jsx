import React from "react";
import AddQuestionModal from './AddQuestionModal.jsx'
import ajaxRequests from '../../../ajaxRequests.js';

class AddQuestion extends React.Component {
 constructor (props) {
   super(props);
   this.state = {
     show: false,
     emailInput: 'Example: jack@email.com',
     questionInput: '',
     nicknameInput: 'Example: jackson11!',
   };
 }

  showModal () {
    this.setState({show: true});
  };
  hideModal () {
    this.setState({show: false});
  };

  handleEmailInput (e) {
    this.setState({emailInput: e.target.value});
  }

  handleNicknameInput(e) {
    this.setState({nicknameInput: e.target.value});
  }

  handleQuestionInput(e) {
    this.setState({questionInput: e.target.value});
  }

  handleAddQuestionSubmit() {
    var data = {
      body: this.state.answerInput,
      name: this.state.nicknameInput,
      email: this.state.emailInput,
      //TODO add productID
      product_id: ''
    }
    console.log('data for post request', data);
    var path = 'qa/questions/';
    ajaxRequests.post(path, data, (error, results) => {
      console.log(results);
    });
  }

  render() {
    return (
      <main>
        <AddQuestionModal
          show={this.state.show}
          handleClose={this.hideModal.bind(this)}
          handleAddAnswerSubmit={this.props.handleAddQuestionSubmit}
          emailInput={this.state.emailInput}
          handleEmailInput={this.handleEmailInput.bind(this)}
          nicknameInput={this.state.nicknameInput}
          handleNicknameInput={this.handleNicknameInput.bind(this)}
          handleQuestionInput={this.handleQuestionInput.bind(this)}
          handleAddQuestionSubmit={this.handleAddQuestionSubmit.bind(this)}
          />

       <button className="largeButton" onClick={this.showModal.bind(this)}>ADD A QUESTION +</button>
       </main>
    );
  }
}

export default AddQuestion;