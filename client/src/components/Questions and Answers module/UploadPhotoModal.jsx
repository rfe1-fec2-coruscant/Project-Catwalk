import React from 'react'
import Upload from './Upload.jsx'


class UploadPhotoModal extends React.Component {
  constructor(props) {
    super(props)

  }

  // handleChange(event) {
  //   alert('setState!');
  //   var newArray = this.state.fileArray.slice();
  //   newArray.push(URL.createObjectURL(event.target.files[0]));
  //   console.log('newArray', newArray);
  //   this.setState({
  //     fileArray: newArray
  //   })
  // }


// const UploadPhotoModal = (props) => {
  render() {
      const showHideClassName = this.props.photo ? "photo-modal display-block" : "photo-modal display-none";
      return (

      <div className={showHideClassName}>
        <section className="add-answer-modal-main">
          {this.props.children}
          <h2 className="header">Upload photo</h2>
          <form action={this.props.handlePhotoUpload}>
            <label >Select image:</label>
            <Upload
            handlePhotoSelect={this.props.handlePhotoSelect}
            />
            <Upload
              handlePhotoSelect={this.props.handlePhotoSelect}/>
            {/* <Upload
             handleChange={this.handleChange.bind(this)}/>
            <Upload
             handleChange={this.handleChange.bind(this)}/>
            <Upload
             handleChange={this.handleChange.bind(this)}/> */}
            <input type="submit"></input>
          </form>
          <button type="button" onClick={this.props.handleClose}>
            Close
          </button>
        </section>
      </div>
    );
  };

  }


export default UploadPhotoModal;