import React from 'react';



var ProductList = ( {products, selectNewProduct} ) => {
  var productsList = [];
  for (var i = 0; i < products.length; i++) {
    productsList.push(
      <li key={'prod$' + i} data-index={i} onClick={selectNewProduct}>{products[i].name} | ID: {products[i].id}</li>
    );
  }
  // console.log("productsList: ",productsList);

  return(
    <div>
      <label htmlFor="products-menu-cb">
        <i id="products-icon" className="fas fa-tshirt"></i>
      </label>
      <input type="checkbox" id="products-menu-cb"/>
      <ul id="products-list">
        {productsList}
      </ul>
    </div>
  );
}

export default ProductList;
