import React from 'react';

const ComparisonModal = ({ show, handleCloseModal, productFeatures, currentProductFeatures, comparedName, currentProductName }) => {
  var showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <div className='modal-main'>
        <button type="button" className="close-button" onClick={handleCloseModal}>Close</button>
        <h4>Comparing</h4>
        <span className="current-product-header">{currentProductName}</span>
        <span className="compared-product-header">{comparedName}</span>
        <br></br>
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