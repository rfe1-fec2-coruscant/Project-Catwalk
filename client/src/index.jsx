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
      currentProduct: {},
      currentProductId: undefined
    };
    this.addtoCart = this.addtoCart.bind(this);
    this.changeCurrentProduct = this.changeCurrentProduct.bind(this);
    this.setProductList = this.setProductList.bind(this);
    this.handleProductClickFromRelatedProducts = this.handleProductClickFromRelatedProducts.bind(this);
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
    // const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    // function switchTheme(e) {
    //   if (e.target.checked) {
    //       document.documentElement.setAttribute('data-theme', 'dark');
    //       }
    //   else {
    //       document.documentElement.setAttribute('data-theme', 'light');
    //     }
    //  }

    //  toggleSwitch.addEventListener('change', switchTheme, false);

  }

  addtoCart() {

  }

  setProductList(products) {
    this.setState({ products: products }, this.changeCurrentProduct);
  }

  changeCurrentProduct(event) {
    if (event) {
      // console.log(event.target.dataset.index);
    }
    var index = (event) ? event.target.dataset.index : 0;
    // console.log(this.state.products[index]);
    this.setState({
      currentProduct: this.state.products[index],
      currentProductId: this.state.products[index].id
    });
  }

  handleProductClickFromRelatedProducts(id) {
    ajaxRequests.get('products/' + id, newProduct => {
      this.setState({
        currentProduct: newProduct,
        currentProductId: newProduct.id
      });
    })
  }



  render() {
    // console.log('rendering', this.state.currentProduct);
    if (Object.keys(this.state.currentProduct).length) {


      return (
        <div id="grid-container">
          <div className="widget-for-clicks widget" id="ModuleOverview">
            <header>
              <ProductList products={this.state.products} select={this.changeCurrentProduct} />
              <div class="theme-switch-wrapper">
                <label class="theme-switch" for="checkbox">
                  <input type="checkbox" id="checkbox" />
                  <div class="slider round"></div>
                </label>
                  <em>Enable Dark Mode!</em>
                </div>
            </header>
            <Overview product={this.state.currentProduct} addtoCart={this.addtoCart} />
          </div>
          <div className="widget-for-clicks widget" id="ModuleRelatedItemsAndComparisons">
            <RelatedItemsAndComparisons handleProductClickFromRelatedProducts={this.handleProductClickFromRelatedProducts} currentProductId={this.state.currentProductId} />
          </div>
          <div className="widget-for-clicks widget" id="ModuleQuestions">
            <Questions />
          </div>
          <div className="widget-for-clicks widget" id="ModuleReviews">
            <Reviews />
          </div>
        </div>
      );
    } else {
      return (<div>Loading...</div>);
    }


  }
}

export default App;