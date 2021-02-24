import React from 'react';
import Questions from './components/Questions.jsx'


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
        <Questions/>
      </div>

    )
  }
}

export default App;
