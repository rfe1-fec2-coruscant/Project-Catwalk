import React from 'react';
import ajaxRequests from '../../ajaxRequests.js';
import RelatedProducts from './relatedItemsSubcomponents/RelatedProducts.jsx';
import YourOutfit from './relatedItemsSubcomponents/YourOutfit.jsx';

class RelatedItemsAndComparisons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentlyViewedProduct: 19976,
      relatedProductIds: [],
      relatedProducts: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    ajaxRequests.get('products/' + this.state.currentlyViewedProduct + '/related', relatedProductIds => {
      this.setState({
        relatedProductIds: relatedProductIds
      });
    });
  }

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

  render() {
    return (
      <div className="related-items">
        <h2>Related Items and Comparisons</h2>
        <RelatedProducts relatedProductIds={this.state.relatedProductIds}/>
        <YourOutfit />
      </div>
    );
  }

}

export default RelatedItemsAndComparisons;

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