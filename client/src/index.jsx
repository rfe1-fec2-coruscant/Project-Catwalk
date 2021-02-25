import React from 'react';
import Questions from './components/questions/Questions.jsx';
import Overview from './components/overview/Overview.jsx';


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
      </div>

    )
  }
}

export default App;
