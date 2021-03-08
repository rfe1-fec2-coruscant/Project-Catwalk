import React from 'react';


var QuantityList = ( {max} ) => {
  console.log("rendering QuantityList");
  if (max) {
    let options = [];
    for (var i = 1; i <= max; i++) {
      options.push(
        <option value={i}>{i}</option>
      );
    }

    return(
      <select
      required
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

export default QuantityList;