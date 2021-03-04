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
    this.state = {
      currentProductId: 19735,
      currentProductFeatures: [{"feature": "5 Year Warranty", "value": null}, {"feature": "Satisfaction Guaranteed", "value": null}, {"feature": "Frame", "value": "\"DuraResin\""}, {"feature": "5 Year Warranty", "value": null}],
      currentProductName: 'Kathlyn Pants',
      relatedProductIds: [],
      yourOutfitIds: [],
      isCurrentProductAdded: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    ajaxRequests.get('products/' + this.state.currentProductId + '/related', relatedProductIds => {
      this.setState({
        relatedProductIds: relatedProductIds
      });
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
      // send the outfit to server
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
    // make a delete request to server
    ajaxRequests.deleteFromYourOutfit(yourOutfitId, () => {
      console.log('successfully deleted!');
    });
  }

  setYourOutfitIdsOnInitialMount(arrayFromSession) {
    console.log('arrayFromSession:', arrayFromSession);
    this.setState({ yourOutfitIds: arrayFromSession || [] });
  }

  render() {
    return (
      <div className="related-items">
        <h2>Related Items and Comparisons</h2>
          <RelatedProducts relatedProductIds={this.state.relatedProductIds} currentProductFeatures={this.state.currentProductFeatures} currentProductName={this.state.currentProductName}/>
        <br></br>
        <h2>Your Outfit</h2>
        <YourOutfit isCurrentProductAdded={this.state.isCurrentProductAdded} yourOutfitIds={this.state.yourOutfitIds} handleAddOutfit={this.handleAddOutfit} handleOutfitRemove={this.handleOutfitRemove} setYourOutfitIdsOnInitialMount={this.setYourOutfitIdsOnInitialMount}/>
      </div>
    );
  }

}

export default RelatedItemsAndComparisons;


  // fetchProductAndStyleObjects(relatedProductIds) {
  //   var productObjects = relatedProductIds.map(productId => {
  //     var relatedProductObject = { id: productId, productObject: { name: '' }, stylesObject: {} };
  //     ajaxRequests.get('products/' + productId, productObject => {
  //       relatedProductObject.productObject = productObject;
  //     });
  //     ajaxRequests.get('products/' + productId + '/styles', stylesObject => {
  //       relatedProductObject.stylesObject = stylesObject;
  //     });
  //     return relatedProductObject;
  //   });

  //   Promise.all(productObjects)
  //     .then(productObjects => {
  //       console.log('productObjects:', productObjects);
  //       this.setState({
  //         relatedProducts: productObjects
  //       });
  //     })
  //     .catch(err => {
  //       console.log('err from fetchProductObjects:', err);
  //     });
  // }

// ajaxRequests.get('products/' + this.state.currentlyViewedProduct + '/related', data => {
//   // for each id of data array, make an ajax request for the product. create new object that has id property and a product property, set to the returned product object
//   // THEN, make an ajax request for the associated styles object. add the returned object to a styles property on new object. push new object to the state array somehow
//   console.log('data from ajax request:', data);
//   for (var id of data) {
//     var updatedRelatedProducts = this.state.relatedProducts;
//     var relatedProductObject = { 'id': id };
//     ajaxRequests.get('products/' + id, productObject => {
//       relatedProductObject.product = productObject;
//       ajaxRequests.get('products/' + id + '/styles', stylesObject => {
//         relatedProductObject.styles = stylesObject;
//         updatedRelatedProducts.push(stylesObject);
//         this.setState({ relatedProducts: updatedRelatedProducts });
//       });
//     });
//   }
// });

      // Promise.all([this.fetchProductObject(relatedProductIds), this.fetchStylesObject(relatedProductIds)])
      //   .then(([relatedProductObjects, relatedStylesObjects]) => {
      //     this.setState({
      //       relatedProducts: relatedProductObjects,
      //       relatedStyles: relatedStylesObjects
      //     });
      //   })
      //   .catch(err => {
      //     console.log('err from Promise.all():', err);
      //   });

      // fetchProductObjects(relatedProductIds) {
      //   var productObjects = relatedProductIds.map(productId => {
      //     return ajaxRequests.get('products/' + productId, productObject => productObject);
      //   });
      //   Promise.all(productObjects)
      //     .then(productObjects => {
      //       this.setState({
      //         relatedProducts: productObjects
      //       });
      //     })
      //     .catch(err => {
      //       console.log('err from fetchProductObjects:', err);
      //     });
      // }

      // fetchStylesObjects(relatedProductIds) {
      //   var styleObjects = relatedProductIds.map(productId => {
      //     return ajaxRequests.get('products/' + productId + '/styles', styleObject => styleObject);
      //   });
      //   Promise.all(styleObjects)
      //     .then(styleObjects => {
      //       this.setState({
      //         relatedStyles: styleObjects
      //       });
      //     })
      //     .catch(err => {
      //       console.log('err from fetchProductObjects:', err);
      //     });
      // }