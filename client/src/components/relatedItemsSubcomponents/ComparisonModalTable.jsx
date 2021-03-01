import React from 'react';

const ComparisonModalTable = ({ productFeatures, currentProductFeatures }) => {

  console.log('productFeatures:', productFeatures);

  return (
    <table>
      {currentProductFeatures.map((currentProductFeature, index) => {
        <tr key={index}>
          <td>&#10003;</td>
          <td>{currentProductFeature.feature}</td>
          <td>&#10003;</td>
        </tr>
      })}
    </table>
  );
};

export default ComparisonModalTable;

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