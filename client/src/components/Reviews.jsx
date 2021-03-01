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
    this.tempid = 19378;
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
      console.log(this.state.curProduct)
      return (
        <div>
          {/* <KeyWordSearch />
          <ProductBreakdown />
          <RatingBreakdown /> */}
          <ReviewsList
            curProduct={this.state.curProduct}
            curProductId={this.state.curProduct.product}
            curProductCount={this.state.curProduct.count}
            curProductReviews={this.state.curProduct.results}
          />
          {/* <SortOptions /> */}
          <WriteNewReview />
        </div>
      )
    }
  }


export default Reviews;
