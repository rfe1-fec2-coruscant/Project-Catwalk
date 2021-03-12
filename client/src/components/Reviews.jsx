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
    this.state = {
      curProduct: {},
      curProductMeta: {},
      currentProductId : this.props.currentProductId
    };
  }

  componentDidMount() {
    this.fetchData()
    this.anotherFetch()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentProductId !== this.props.currentProductId) {
      this.setState({
        currentProductId: this.props.currentProductId
      });
      this.fetchData()
      this.anotherFetch()
    }
  }

  fetchData() {
    ajaxRequests.get(`reviews?product_id=${this.props.currentProductId}`, (results) => {
      this.setState({ curProduct: results });
    })
  }

  anotherFetch() {
    console.log('current product id', this.props.currentProductId)
    ajaxRequests.get(`reviews/meta?product_id=${this.props.currentProductId}`, (results) => {
      this.setState({ curProductMeta: results });

    })
  }

    render() {
      if (Object.keys(this.state.curProduct).length > 0) {
        return (
          <div className="rev-container widget center-subwidgets" id="reviews-outer-div">
            <h2 id="reviews-outer-title" className="header-text">RATINGS AND REVIEWS</h2>
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
