import React from 'react';
import ajaxRequests from '../../ajaxRequests.js';
import RelatedProducts from './relatedItemsSubcomponents/RelatedProducts.jsx';
import YourOutfit from './relatedItemsSubcomponents/YourOutfit.jsx';

class RelatedItemsAndComparisons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    ajaxRequests.get('products', data => {
      console.log('data:', data);
      this.setState({ products: data });
    });
  }

  render() {
    return (
      <div className="related-items">
        <h2>Related Items and Comparisons</h2>
        <RelatedProducts />
        <YourOutfit />
      </div>
    );
  }

}


export default RelatedItemsAndComparisons;