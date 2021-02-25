import React from 'react';
import ReviewsListItem from './ReviewsListItem.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() { }

  //
  render() {
    return (
      <ReviewsListItem/>
    )
  }
}

export default ReviewsList;
