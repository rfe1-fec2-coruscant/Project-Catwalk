import React from 'react';
import ajaxRequests from '../../ajaxRequests.js';
import RelatedProducts from './relatedItemsSubcomponents/RelatedProducts.jsx';
import YourOutfit from './relatedItemsSubcomponents/YourOutfit.jsx';

class RelatedItemsAndComparisons extends React.Component {

  constructor(props) {
    super(props);
    this.handleAddOutfit = this.handleAddOutfit.bind(this);
    this.handleOutfitRemove = this.handleOutfitRemove.bind(this);
    this.setYourOutfitIdsOnInitialMount = this.setYourOutfitIdsOnInitialMount.bind(this);
    this.handleProductDetailRender = this.handleProductDetailRender.bind(this);
    this.state = {
      currentProductId: this.props.currentProductId,
      relatedProductIds: [],
      yourOutfitIds: [],
      isCurrentProductAdded: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentProductId !== this.props.currentProductId) {
      this.setState({
        currentProductId: this.props.currentProductId
      });
      this.secondaryFetch(this.props.currentProductId);
    }
  }

  secondaryFetch(id) {
    ajaxRequests.get('products/' + id + '/related', relatedProductIds => {
      this.setState({
        relatedProductIds: relatedProductIds
      });
    });
  }

  fetchData() {
    ajaxRequests.get('products/' + this.state.currentProductId + '/related', relatedProductIds => {
      this.setState({
        relatedProductIds: relatedProductIds
      });
    });
  }

  handleProductDetailRender(id) {
    if (id === this.state.currentProductId) {
      return console.log('you\'re already on this product\'s page!');
    }
    this.props.handleProductClickFromRelatedProducts(id);
    // check if id passed up is in yourOutfitIds
    var updatedIsCurrentProductAdded = this.state.yourOutfitIds.indexOf(id) === -1 ? false : true;
    this.setState({
      currentProductId: id,
      isCurrentProductAdded: updatedIsCurrentProductAdded
    });
    ajaxRequests.get('products/' + id + '/related', relatedProductIds => {
      this.setState({ relatedProductIds: relatedProductIds });
    });
  }

  handleAddOutfit() {
    if (!this.state.yourOutfitIds.includes(this.state.currentProductId)) {
      var yourOutfitIdsUpdated = this.state.yourOutfitIds;
      yourOutfitIdsUpdated.unshift(this.state.currentProductId);
      this.setState({
        yourOutfitIds: yourOutfitIdsUpdated,
        isCurrentProductAdded: true
      });
      ajaxRequests.putYourOutfitItem(this.state.currentProductId, () => {
        console.log('successfully PUT your outfit item to database');
      });
    } else {
      console.log('top component says this is already added!');
    }
  }

  handleOutfitRemove(yourOutfitId) {
    var yourOutfitIdsUpdated = this.state.yourOutfitIds;
    var index = yourOutfitIdsUpdated.indexOf(yourOutfitId);
    yourOutfitIdsUpdated.splice(index, 1);
    this.setState({
      yourOutfitIds: yourOutfitIdsUpdated,
      isCurrentProductAdded: false
     });
    ajaxRequests.deleteFromYourOutfit(yourOutfitId, () => {
      console.log('successfully deleted!');
    });
  }

  setYourOutfitIdsOnInitialMount(arrayFromSession) {
    this.setState({ yourOutfitIds: arrayFromSession || [] });
  }

  render() {
    return (
      <div className="related-items center-subwidgets widget">
        <h2 className="related-items-header related-items-header-text header-text">RELATED ITEMS AND COMPARISONS</h2>
          <RelatedProducts relatedProductIds={this.state.relatedProductIds} currentProductId={this.state.currentProductId} handleProductDetailRender={this.handleProductDetailRender}/>
        <br></br>
        <br></br>
        <h2 className="related-items-header related-items-header-text header-text">YOUR OUTFIT</h2>
        <YourOutfit isCurrentProductAdded={this.state.isCurrentProductAdded} yourOutfitIds={this.state.yourOutfitIds} handleAddOutfit={this.handleAddOutfit} handleOutfitRemove={this.handleOutfitRemove} setYourOutfitIdsOnInitialMount={this.setYourOutfitIdsOnInitialMount} handleProductDetailRender={this.handleProductDetailRender}/>
      </div>
    );
  }

}

export default RelatedItemsAndComparisons;