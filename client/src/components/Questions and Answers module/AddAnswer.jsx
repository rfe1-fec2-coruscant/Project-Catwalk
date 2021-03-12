import React from "react";
import AddAnswerModal from './AddAnswerModal.jsx'
import UploadPhotoModal from './UploadPhotoModal.jsx'
import ajaxRequests from '../../../ajaxRequests.js';

class AddAnswer extends React.Component {
 constructor (props) {
   super(props);
   this.state = {
     show: false,
     photo: false,
     emailInput: 'Example: jack@email.com',
     answerInput: '',
     nicknameInput: 'Example: jack543!',
     fileArray: []
   };
 }

 handlePhotoSelect(event) {
  var newArray = this.state.fileArray.slice();
  newArray.push(URL.createObjectURL(event.target.files[0]));
  console.log('newArray', newArray);
  this.setState({
    fileArray: newArray
    });
  };


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

  handleAnswerInput(e) {
    this.setState({answerInput: e.target.value});
  }

  handleAddAnswerSubmit() {
    var data = {
      body: this.state.answerInput,
      name: this.state.nicknameInput,
      email: this.state.emailInput,
      photos: this.state.fileArray
    }
    console.log('data for post request', data);
    var path = 'qa/questions/' + this.props.question.question_id + '/answers'
    console.log('path', path);
    ajaxRequests.post(path, data, (error, results) => {
      // console.log(results);
    });
    // //update
  }

  render() {
    return (
      <span>
        <button type="button" className="smallButton"   onClick={this.showModal.bind(this)}>
          Add Answer
        </button>
        <AddAnswerModal
          show={this.state.show}
          handleClose={this.hideModal.bind(this)}
          productName={this.props.productName}
          question={this.props.question}
          emailInput={this.state.emailInput}
          handleEmailInput={this.handleEmailInput.bind(this)}
          nicknameInput={this.state.nicknameInput}
          handleNicknameInput={this.handleNicknameInput.bind(this)}
          handleAnswerInput={this.handleAnswerInput.bind(this)}
          handlePhotoSelect={this.handlePhotoSelect.bind(this)}
          photo={this.state.photo}
          handleAddAnswerSubmit={this.handleAddAnswerSubmit.bind(this)}/>
      </span>
    );
  }
}

export default AddAnswer;