import React from 'react';

import SizeOption from './SizeOption.jsx';
import QuantityList from './QuantityList.jsx';
import AddToCart from './AddToCart.jsx';

class PurchaseOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: props.currentStyle.skus,
      selectedSize: '',
      maxQty: 0,
      qty: 0
    };
    this.renderSizeOptions = this.renderSizeOptions.bind(this);
    this.sizeSelected = this.sizeSelected.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  renderSizeOptions () {
    var returnOptions = [];
    var sizes = this.state.sizes;
    for (var each in sizes) {
     // console.log(sizes[each]);
      if (sizes[each].quantity > 0) {
        returnOptions.push(
          <SizeOption sku={sizes[each]} pickSize={this.sizeSelected}/>
        );
      }
    }
    return returnOptions;
  }

  sizeSelected (selection) {
    var target = selection.target;
    var targetQty = target.options[target.selectedIndex].dataset.qty;
    var size = target.value

    var maxQty = (targetQty > 15) ? 15 : targetQty;
    this.setState({
      selectedSize: size,
      maxQty: maxQty
    });
  }

  updateQuantity (qty) {
    this.setState({ qty: qty });
  }


  render () {
    return (
      <div id="purchase-options">
        <div>
          <select
          required
          id="size-selector"
          value={this.state.selectedSize}
          className="largeButton purchase-buttons"
          onChange={this.sizeSelected}>
            <option
            disabled
            selected="selected"
            value=""
            className="dead-option">
              Pick a size
            </option>
            {this.renderSizeOptions()}
          </select>
          <QuantityList max={this.state.maxQty} pickNum={this.updateQuantity}/>
        </div>
        <div>
          <AddToCart />
          <div id="favorite" className="largeButton purchase-buttons">*</div>
        </div>
      </div>
    );
  }
}

export default PurchaseOptions;