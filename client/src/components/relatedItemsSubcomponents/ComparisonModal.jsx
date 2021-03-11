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
        showHideClassName: this.props.show ? 'bobmodal display-block' : 'bobmodal display-none',
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
      <div className='bobmodal-main pop-up-modal'>
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