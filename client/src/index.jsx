import React from 'react';

import Overview from './components/Overview.jsx';
import Reviews from './components/Reviews.jsx'
import Questions from './components/Questions.jsx'


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
        <Questions/>
        <Reviews/>
      </div>

    )
  }
}

export default App;
