import React from 'react';
import ajaxRequests from '../../ajaxRequests.js';
import RelatedProducts from './relatedItemsSubcomponents/RelatedProducts.jsx';
import YourOutfit from './relatedItemsSubcomponents/YourOutfit.jsx';

class RelatedItemsAndComparisons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentlyViewedProduct: 19976,
      relatedProducts: []
    };
  }

  componentDidMount() {
    this.fetchRelatedProducts();
  }

  fetchRelatedProducts() {
    ajaxRequests.get('products/' + this.state.currentlyViewedProduct + '/related', data => {
      // for each id of data array, make an ajax request for the product. create new object that has id property and a product property, set to the returned product object
      // THEN, make an ajax request for the associated styles object. add the returned object to a styles property on new object. push new object to the state array somehow
      this.setState({ relatedProducts: data });
      console.log('this.state.relatedProducts:', this.state.relatedProducts);
    });
  }

  render() {
    return (
      <div className="related-items">
        <h2>Related Items and Comparisons</h2>
        <RelatedProducts relatedProducts={this.state.relatedProducts}/>
        <YourOutfit />
      </div>
    );
  }

}


export default RelatedItemsAndComparisons;