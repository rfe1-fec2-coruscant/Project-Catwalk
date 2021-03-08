import React from 'react';
import NewReviewModal from './NewReviewComponents/NewReviewModal.jsx'

class WriteNewReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };

    this.boundShowModal = this.showModal.bind(this);
    this.boundHideModal = this.hideModal.bind(this);
  }

  componentDidMount() {

  }

  showModal() {
    this.setState({
      show: true
    });
  }

  hideModal() {
    this.setState({
      show: false
    });
  }

  render() {

    return (
      <div id="rev-new-review">
        <NewReviewModal shown={this.state.show} hideModal={this.boundHideModal} />
        <button type="button" onClick={this.boundShowModal}>Write New Review</button>
      </div>
    )
  }
}


export default WriteNewReview;
