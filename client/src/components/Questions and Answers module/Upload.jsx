import React from 'react'


class Upload extends React.Component {
  constructor(props){
    super(props)
    // this.state = {
    //   file: null
    // }
    // this.handleChange = this.handleChange.bind(this)
  }
    // handleChange(event) {
    //   this.setState({
    //     file: URL.createObjectURL(event.target.files[0])
    //   })
    // }
  render() {
    return (
      <div>
        <label className="choose-photo">Choose file
        <input className="hidden" type="file" onChange={this.props.handlePhotoSelect}/>

        </label>
        {/* <img className="thumbnail"src={this.props.fileArray[0]}/> */}
      </div>
    );
  }
}
export default Upload;