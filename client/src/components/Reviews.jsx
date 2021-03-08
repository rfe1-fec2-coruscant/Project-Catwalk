import React from 'react';
import $ from 'jquery';
import ajaxRequests from '../../ajaxRequests.js';

import KeyWordSearch from './RatingsAndReviews/KeyWordSearch.jsx';
import ProductBreakdown from './RatingsAndReviews/ProductBreakdown.jsx';
import RatingBreakdown from './RatingsAndReviews/RatingBreakdown.jsx';
import ReviewsList from './RatingsAndReviews/ReviewsList.jsx';
import SortOptions from './RatingsAndReviews/SortOptions.jsx';
import WriteNewReview from './RatingsAndReviews/WriteNewReview.jsx';



class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.tempid = 19735;
    this.state = {curProduct: {}};

  }

  componentDidMount() {
    return ajaxRequests.get(`reviews?product_id=${this.tempid}`, (results) => {
      this.setState({ curProduct: results });
    })
      .catch((error) => {
        console.log(error)
      })

  }

    render() {
      console.log('cur product on my reviews', this.state.curProduct)
      return (
        <div id="reviews-outer-div">
          <h2 id="reviews-outer-title">Ratings and Reviews</h2>
          {/* <KeyWordSearch /> */}
          <RatingBreakdown
            curProduct={this.state.curProduct}
            curProductId={this.state.curProduct.product}
            curProductCount={this.state.curProduct.count}
            curProductReviews={this.state.curProduct.results}
          /><br></br>
          <ProductBreakdown />
          {/* <ReviewsList
            curProduct={this.state.curProduct}
            curProductId={this.state.curProduct.product}
            curProductCount={this.state.curProduct.count}
            curProductReviews={this.state.curProduct.results}
          /><br></br> */}
          <WriteNewReview />
        </div>
      )
    }
  }


export default Reviews;
