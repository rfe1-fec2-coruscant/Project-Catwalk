import React from 'react';

var SizeOption = ( {sku, pickSize} ) => {

  return(
    <option value={sku.size} data-qty={sku.quantity}
      // onClick={pickSize(sku)}
    >
      {sku.size}
    </option>
  );
}

export default SizeOption;