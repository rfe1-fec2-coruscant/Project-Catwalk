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
<<<<<<< HEAD
      products: [
        {
            "id": 19378,
            "campus": "hr-rfe",
            "name": "Alberto Romper",
            "slogan": "Voluptatibus sunt neque repellendus.",
            "description": "Dolor deleniti blanditiis fugit et aut quisquam eius provident. Quasi labore vel ipsum numquam mollitia et. Accusamus asperiores a nisi.",
            "category": "Romper",
            "default_price": "826.00",
            "created_at": "2021-02-23T19:24:34.674Z",
            "updated_at": "2021-02-23T19:24:34.674Z"
        },
        {
            "id": 19089,
            "campus": "hr-rfe",
            "name": "Camo Onesie",
            "slogan": "Blend in to your crowd",
            "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
            "category": "Jackets",
            "default_price": "140.00",
            "created_at": "2021-02-23T19:24:34.450Z",
            "updated_at": "2021-02-23T19:24:34.450Z"
        },
        {
            "id": 19090,
            "campus": "hr-rfe",
            "name": "Bright Future Sunglasses",
            "slogan": "You've got to wear shades",
            "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
            "category": "Accessories",
            "default_price": "69.00",
            "created_at": "2021-02-23T19:24:34.450Z",
            "updated_at": "2021-02-23T19:24:34.450Z"
        },
        {
            "id": 19091,
            "campus": "hr-rfe",
            "name": "Morning Joggers",
            "slogan": "Make yourself a morning person",
            "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
            "category": "Pants",
            "default_price": "40.00",
            "created_at": "2021-02-23T19:24:34.450Z",
            "updated_at": "2021-02-23T19:24:34.450Z"
        },
        {
            "id": 19092,
            "campus": "hr-rfe",
            "name": "Slacker's Slacks",
            "slogan": "Comfortable for everything, or nothing",
            "description": "I'll tell you how great they are after I nap for a bit.",
            "category": "Pants",
            "default_price": "65.00",
            "created_at": "2021-02-23T19:24:34.450Z",
            "updated_at": "2021-02-23T19:24:34.450Z"
        }
      ],

=======
      shoppingCart: {
        products: [],
        subtotal: 0
      },
      products: [],
      currentProduct: {}
>>>>>>> ca74c788af47f1970417e9e6242fbb71d0edd494
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
            select={this.changeCurrentProduct}
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
