import React from 'react';

import Overview from './components/Overview.jsx';
import Reviews from './components/Reviews.jsx'
import Questions from './components/Questions.jsx'
import RelatedItemsAndComparisons from './components/RelatedItemsAndComparisons.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state ={};
  }
  componentDidMount() {}

  render() {
    return(
      <div>
        <div>Hello World</div>
        <Overview />
        <RelatedItemsAndComparisons />
        <Questions/>
        <br></br><div>Reviews</div><br></br>
        <Reviews/>
      </div>

    )
  }
}

export default App;
