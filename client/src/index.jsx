import React from 'react';
import ajaxRequests from '../ajaxRequests.js';

import Overview from './components/Overview.jsx';
import Reviews from './components/Reviews.jsx'
import Questions from './components/Questions.jsx'
import RelatedItemsAndComparisons from './components/RelatedItemsAndComparisons.jsx';
import ProductList from './ProductList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingCart: {
        products: [],
        subtotal: 0
      },
      products: [],
      currentProduct: {}
    };
    this.addtoCart = this.addtoCart.bind(this);
    this.changeCurrentProduct = this.changeCurrentProduct.bind(this);
    this.setProductList = this.setProductList.bind(this);
  }
  componentDidMount() {
    // console.log("mounted");
    // if (this.state.currentProduct === {}) {
    //  this.setState( {currentProduct: this.state.products[1]} );
    // }
    if (this.state.products.length < 1) {
      ajaxRequests.get('products?count=100', (returnData) => {
        // console.log(returnData);
        this.setProductList(returnData);
      });
    }

  }

  addtoCart () {

  }

  setProductList (products) {
    this.setState({products: products}, this.changeCurrentProduct);
  }

  changeCurrentProduct (event) {
    if (event) {
      console.log(event.target.dataset.index);
    }
    var index = (event) ? event.target.dataset.index : 0;
    console.log(this.state.products[index]);
    this.setState({ currentProduct: this.state.products[index] });
  }

  render() {
    // console.log('rendering', this.state.currentProduct);
    if (Object.keys(this.state.currentProduct).length) {
      return(
        <div>
          <header>
            <ProductList
            products={this.state.products}
            selectNewProduct={this.changeCurrentProduct}
            />
          </header>

          <Overview
            product={this.state.currentProduct}
            addtoCart={this.addtoCart}/>
          <RelatedItemsAndComparisons />
          <Questions/>
          <Reviews/>
        </div>
      );
    } else {
      return( <div>Loading...</div> );
    }


  }
}

export default App;
