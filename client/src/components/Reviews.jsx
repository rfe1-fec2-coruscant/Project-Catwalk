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
    ajaxRequests.get(`reviews?product_id=${this.tempid}`, (results) => {
      this.setState({ curProduct: results });
    })
      // .catch((error) => {
      //   console.log(error)
      // })

  }

    render() {
      // console.log('Here is what Im getting', this.state.curProduct);
      if (Object.keys(this.state.curProduct).length > 0) {
        return (
          <div className="rev-container" id="reviews-outer-div">
            <h2 id="reviews-outer-title">Ratings and Reviews</h2>
            {/* <KeyWordSearch /> */}
            <RatingBreakdown
              curProduct={this.state.curProduct}
              curProductId={this.state.curProduct.product}
              curProductCount={this.state.curProduct.count}
              curProductReviews={this.state.curProduct.results}
            /><br></br>
            <ProductBreakdown

            />
            <ReviewsList
            curProduct={this.state.curProduct}
            curProductId={this.state.curProduct.product}
            curProductCount={this.state.curProduct.count}
            curProductReviews={this.state.curProduct.results}
          /><br></br>
            <WriteNewReview />
          </div>
        )

      } else {
          return (
            <div></div>
          )
      }

    }
  }


export default Reviews;
