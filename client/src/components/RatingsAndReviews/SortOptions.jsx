import React from 'react';


class SortOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ""};
    this.boundHandleChange = this.handleChange.bind(this)
  }
  componentDidMount() { }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  renderNewest() {

  }

  renderMostHelpful() {

  }

  render() {
    return (
      <div id="rev-sort-options">{this.props.count} reviews, sorted by:
        <select value={this.state.value} onChange={this.boundHandleChange}>
          <option value="Relevant">Relevant</option>
          <option value="Helpful">Helpful</option>
          <option value="Newest">Newest</option>
        </select>
      </div>
    )
  }
}

export default SortOptions;
