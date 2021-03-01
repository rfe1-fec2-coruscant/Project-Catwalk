import React from 'react';

const ComparisonModal = ({ show, handleCloseModal, productFeatures, currentProductFeatures }) => {
  var showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <div className='modal-main'>
        <button type="button" className="close-button" onClick={handleCloseModal}>Close</button>
        <h4>Comparing</h4>
        {currentProductFeatures.map((currentProductFeature, index) => {
          if (currentProductFeature.value) {
            return (
              <p className="feature" key={index}>{currentProductFeature.feature + ': ' + currentProductFeature.value}</p>
            );
          } else {
            return (
              <p className="feature" key={index}>{currentProductFeature.feature}</p>
            );
          }
        })}
        {productFeatures.map((productFeature, index) => {
          if (productFeature.value) {
            return (
              <p className="feature" key={index}>{productFeature.feature + ': ' + productFeature.value}</p>
            );
          } else {
            return (
              <p className="feature" key={index}>{productFeature.feature}</p>
            );
          }
        })}
      </div>
    </div>
  );
}

export default ComparisonModal;

// const ComparisonModal = ({ show, handleCloseModal, productFeatures }) => {
//   var showHideClassName = show ? 'modal display-block' : 'modal display-none';

//   return (
//     <div className={showHideClassName}>
//       <div className='modal-main'>
//         <button type="button" className="close-button" onClick={handleCloseModal}>Close</button>
//         <h4>Comparing</h4>
//         {productFeatures.map(productFeature => {
//           <p>{productFeature.feature}</p>
//         })}
//       </div>
//     </div>
//   );
// }


// const ComparisonModal = ({ show, handleCloseModal, productFeatures }) => {
//   var showHideClassName = show ? 'modal display-block' : 'modal display-none';

//   return (
//     <div className={showHideClassName}>
//       <div className='modal-main'>
//         <button type="button" className="close-button" onClick={handleCloseModal}>Close</button>
//         <h4>Comparing</h4>
//         {productFeatures.map(productFeature => {
//           <p>{productFeature.feature}</p>
//         })}
//       </div>
//     </div>
//   );
// }

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

