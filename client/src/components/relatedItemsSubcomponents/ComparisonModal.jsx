import React from 'react';
import ComparisonModalTable from './ComparisonModalTable.jsx';

class ComparisonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // show: this.props.show,
      // handleCloseModal: this.props.handleCloseModal,
      showHideClassName: this.props.show ? 'modal display-block' : 'modal display-none',
      productFeatures: this.props.productFeatures,
      currentProductFeatures: this.props.currentProductFeatures,
      comparedName: this.props.comparedName,
      currentProductName: this.props.currentProductName
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.show !== prevProps.show) {
      this.setState({
        showHideClassName: this.props.show ? 'modal display-block' : 'modal display-none',
        productFeatures: this.props.productFeatures,
        currentProductFeatures: this.props.currentProductFeatures,
        comparedName: this.props.comparedName,
        currentProductName: this.props.currentProductName
      });
    } else if (this.props.currentProductFeatures !== prevProps.currentProductFeatures) {
      this.setState({
        currentProductFeatures: this.props.currentProductFeatures,
        currentProductName: this.props.currentProductName
      });
    }
  }

  render() {
    // var { show, handleCloseModal, productFeatures, currentProductFeatures, comparedName, currentProductName } = this.props;
    // var showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={this.state.showHideClassName}>
      <div className='modal-main'>
        <button type="button" className="close-button" onClick={this.props.handleCloseModal}>&#10006;</button>
        <span className="comparing-header"><em>Comparing</em></span>
        <br></br>
        <span className="current-product-header">{this.state.currentProductName}</span>
        <span className="compared-product-header">{this.state.comparedName}</span>
        <br></br>
        <br></br>
        <ComparisonModalTable productFeatures={this.state.productFeatures} currentProductFeatures={this.state.currentProductFeatures}/>
      </div>
    </div>
    );
  }

}

export default ComparisonModal;

// const ComparisonModal = ({ show, handleCloseModal, productFeatures, currentProductFeatures, comparedName, currentProductName }) => {
//   var showHideClassName = show ? 'modal display-block' : 'modal display-none';
//   return (
//     <div className={showHideClassName}>
//       <div className='modal-main'>
//         <button type="button" className="close-button" onClick={handleCloseModal}>&#10006;</button>
//         <span className="comparing-header"><em>Comparing</em></span>
//         <br></br>
//         <span className="current-product-header">{currentProductName}</span>
//         <span className="compared-product-header">{comparedName}</span>
//         <br></br>
//         <br></br>
//         <ComparisonModalTable productFeatures={productFeatures} currentProductFeatures={currentProductFeatures}/>
//       </div>
//     </div>
//   );
// }

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