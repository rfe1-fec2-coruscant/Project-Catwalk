import React from 'react';
import Questions from './components/Questions.jsx'
import RelatedItemsAndComparisons from './components/RelatedItemsAndComparisons.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state ={};
  }
  componentDidMount() {}

//
  render() {
    return(
      <div>
        <div>Hello World</div>
        <RelatedItemsAndComparisons />
        <Questions/>
      </div>

    )
  }
}

export default App;
