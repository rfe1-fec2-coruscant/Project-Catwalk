import React from 'react';

class ComparisonModalTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productFeatures: [],
      currentProductFeatures: []
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.productFeatures !== prevProps.productFeatures) {
      this.setState({
        productFeatures: this.props.productFeatures,
        currentProductFeatures: this.props.currentProductFeatures
      });
    }
  }

  render() {
    if (this.state.productFeatures.length > 0 && this.state.currentProductFeatures.length > 0) {
      var featuresObject = {};
      this.state.currentProductFeatures.forEach(currentProductFeature => {
        if (currentProductFeature.value) {
          featuresObject[currentProductFeature.feature + ': ' + currentProductFeature.value] = 'inOriginal';
        } else {
          featuresObject[currentProductFeature.feature] = 'inOriginal';
        }
      });
      this.state.productFeatures.forEach(productFeature => {
        if (productFeature.value) {
          if (featuresObject[productFeature.feature + ': ' + productFeature.value] === 'inOriginal') {
            featuresObject[productFeature.feature + ': ' + productFeature.value] = 'inBoth';
          } else {
            featuresObject[productFeature.feature + ': ' + productFeature.value] = 'inRelated';
          }
        } else {
          if (featuresObject[productFeature.feature] === 'inOriginal') {
            featuresObject[productFeature.feature] = 'inBoth';
          } else {
            featuresObject[productFeature.feature] = 'inRelated';
          }
        }
      });
      var featuresArray = Object.keys(featuresObject);

      return (
        <table id="features-table">
          <tbody>
            {featuresArray.map((feature, index) => {
              return (
                <tr className="features-table-row" key={index}>
                  <td className="features-table-data" >{featuresObject[feature] === 'inOriginal' || featuresObject[feature] === 'inBoth' ? '\u2713' : ''}</td>
                  <td className="features-table-data features-table-data-name">{feature}</td>
                  <td className="features-table-data">{featuresObject[feature] === 'inBoth' || featuresObject[feature] === 'inRelated' ? '\u2713' : ''}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else {
      return (
        <p>Nothing to see, here</p>
      );
    }

  }

}

export default ComparisonModalTable;

// const ComparisonModalTable = ({ productFeatures, currentProductFeatures }) => {
//   var featuresObject = {};
//   currentProductFeatures.forEach(currentProductFeature => {
//    if (currentProductFeature.value) {
//     featuresObject[currentProductFeature.feature + ': ' + currentProductFeature.value] = 'inOriginal';
//    } else {
//     featuresObject[currentProductFeature.feature] = 'inOriginal';
//    }
//   });
//   productFeatures.forEach(productFeature => {
//     if (productFeature.value) {
//       if (featuresObject[productFeature.feature + ': ' + productFeature.value] === 'inOriginal') {
//         featuresObject[productFeature.feature + ': ' + productFeature.value] = 'inBoth';
//       } else {
//         featuresObject[productFeature.feature + ': ' + productFeature.value] = 'inRelated';
//       }
//     } else {
//       if (featuresObject[productFeature.feature] === 'inOriginal') {
//         featuresObject[productFeature.feature] = 'inBoth';
//       } else {
//         featuresObject[productFeature.feature] = 'inRelated';
//       }
//     }
//   });
//   var featuresArray = Object.keys(featuresObject);

//   return (
//     <table id="features-table">
//       <tbody>
//       {featuresArray.map((feature, index) => {
//         return (
//           <tr className="features-table-row" key={index}>
//             <td className="features-table-data" >{featuresObject[feature] === 'inOriginal' || featuresObject[feature] === 'inBoth' ? '\u2713' : ''}</td>
//             <td className="features-table-data features-table-data-name">{feature}</td>
//             <td className="features-table-data">{featuresObject[feature] === 'inBoth' || featuresObject[feature] === 'inRelated' ? '\u2713' : ''}</td>
//           </tr>
//         );
//         })}
//       </tbody>
//     </table>
//   );
// };