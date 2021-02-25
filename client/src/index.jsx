import React from 'react';
import Reviews from './components/RatingsAndReviews/reviewsidx.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state ={};
  }
  componentDidMount() {}

//
  render() {
    return(
      <Reviews />
    )
  }
}

export default App;
