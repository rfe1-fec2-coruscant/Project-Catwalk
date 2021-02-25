import React from 'react';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div id="overview" style="height:100px; width:100vw; background-color:blue">
        <p>Hello World!</p>
      </div>
    );
  }
}

export default Overview;