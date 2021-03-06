import React from 'react';
import ComparisonModalTable from './ComparisonModalTable.jsx';

const ComparisonModal = ({ show, handleCloseModal, productFeatures, currentProductFeatures, comparedName, currentProductName }) => {
  var showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <div className='modal-main'>
        <button type="button" className="close-button" onClick={handleCloseModal}>&#10006;</button>
        <span className="comparing-header"><em>Comparing</em></span>
        <br></br>
        <span className="current-product-header">{currentProductName}</span>
        <span className="compared-product-header">{comparedName}</span>
        <br></br>
        <br></br>
        <ComparisonModalTable productFeatures={productFeatures} currentProductFeatures={currentProductFeatures}/>
      </div>
    </div>
  );
}

export default ComparisonModal;

// {currentProductFeatures.map((currentProductFeature, index) => {
//   if (currentProductFeature.value) {
//     return (
//       <p className="feature" key={index}>{currentProductFeature.feature + ': ' + currentProductFeature.value}</p>
//     );
//   } else {
//     return (
//       <p className="feature" key={index}>{currentProductFeature.feature}</p>
//     );
//   }
// })}
// {productFeatures.map((productFeature, index) => {
//   if (productFeature.value) {
//     return (
//       <p className="feature" key={index}>{productFeature.feature + ': ' + productFeature.value}</p>
//     );
//   } else {
//     return (
//       <p className="feature" key={index}>{productFeature.feature}</p>
//     );
//   }
// })}