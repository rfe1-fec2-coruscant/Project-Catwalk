import React from 'react';


// var QuantityList = ( {max, pickNum} ) =>

class QuantityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    let newQty = e.target.value;
    this.setState({
      quantity: newQty
    });
    this.props.pickNum(newQty);
  }

  render () {
    //console.log("rendering QuantityList");
    if (this.props.max) {
      let options = [];
      for (var i = 1; i <= this.props.max; i++) {
        options.push(
          <option value={i}>{i}</option>
        );
      }

      return(
        <select
        required
        value={this.state.quantity}
        onChange={this.handleChange}
        id="quantity-selector"
        className="purchase-buttons">
          {options}
        </select>
      );
    } else {
      return(
        <select id="quantity-selector"
        className="purchase-buttons"
        disabled></select>

      )
    }
  }
}

export default QuantityList;