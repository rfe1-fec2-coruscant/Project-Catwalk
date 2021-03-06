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
  alert('setState!');
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
  // showPhoto () {
  //   this.setState({show: false});
  //   this.setState({photo: true});
  // };
  // hidePhoto () {
  //   this.setState({photo: false});
  // };

  // handlePhotoUpload () {
  //   alert('upload!');
  // }

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
    alert('submitting!')
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
      console.log(results);
    });
    // //update
  }

  render() {
    return (
      <main>
        <AddAnswerModal
          show={this.state.show}
          handleClose={this.hideModal.bind(this)}
          productName={this.props.productName}
          question={this.props.question}
          // handleAddAnswerSubmit={this.props.handleAddAnswerSubmit}
          // showPhoto={this.showPhoto.bind(this)}
          emailInput={this.state.emailInput}
          handleEmailInput={this.handleEmailInput.bind(this)}
          nicknameInput={this.state.nicknameInput}
          handleNicknameInput={this.handleNicknameInput.bind(this)}
          handleAnswerInput={this.handleAnswerInput.bind(this)}
          handlePhotoSelect={this.handlePhotoSelect.bind(this)}
          photo={this.state.photo}
          // handleClose={this.hidePhoto.bind(this)}
          handleAddAnswerSubmit={this.handleAddAnswerSubmit.bind(this)}/>

        {/* <UploadPhotoModal
          handlePhotoSelect={this.handlePhotoSelect.bind(this)}
          photo={this.state.photo}
          handleClose={this.hidePhoto.bind(this)}
        /> */}
        <button className="smallButton" onClick={this.showModal.bind(this)}>
          Add Answer
        </button>
      </main>
    );
  }
}

export default AddAnswer;