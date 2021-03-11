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
    this.state = {
      curProduct: {},
      curProductMeta: {}
    };

  }

  componentDidMount() {
    ajaxRequests.get(`reviews?product_id=${this.tempid}`, (results) => {
      this.setState({ curProduct: results });
    })

    ajaxRequests.get(`reviews/meta/?product_id=${this.tempid}`, (results) => {
      this.setState({ curProductMeta: results });
    })
      // .catch((error) => {
      //   console.log(error)
      // })
  }

    render() {
      // console.log('Here is what Im getting', this.state.curProduct);
      if (Object.keys(this.state.curProduct).length > 0) {
        return (
          <div className="rev-container widget center-subwidgets" id="reviews-outer-div">
            <h2 id="reviews-outer-title" class="header-text">RATINGS AND REVIEWS</h2>
            {/* <KeyWordSearch /> */}
            <div className="reviews-body">
              <div>
                <RatingBreakdown
                  curProduct={this.state.curProduct}
                  curProductId={this.state.curProduct.product}
                  curProductCount={this.state.curProduct.count}
                  curProductReviews={this.state.curProduct.results}
                /><br></br>
                <ProductBreakdown curProductMeta={this.state.curProductMeta}/>
              </div>
              <div>
                <ReviewsList
                curProduct={this.state.curProduct}
                curProductId={this.state.curProduct.product}
                curProductCount={this.state.curProduct.count}
                curProductReviews={this.state.curProduct.results}
              /><br></br>
                <WriteNewReview />
              </div>
            </div>
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
