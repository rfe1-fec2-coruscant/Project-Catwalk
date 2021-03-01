import React from 'react';

const ComparisonModal = ({ show, handleCloseModal }) => {
  var showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <h3>Comparing</h3>
      <button type="button" onClick={handleCloseModal}>Close</button>
    </div>
  );
}

export default ComparisonModal;


// class ComparisonModal extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       show: false
//     };
//     this.showModal = this.showModal.bind(this);
//     this.hideModal = this.hideModal.bind(this);
//   }

//   showModal() {
//     this.setState({ show: true });
//   }

//   hideModal() {
//     this.setState({ show: false });
//   }

//   render() {
//     return (
//       <h3>Comparing</h3>
//     );
//   }

// }

