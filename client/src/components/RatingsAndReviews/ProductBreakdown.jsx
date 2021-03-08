import React from 'react';

var ProductBreakdown = () => (
  <div id="rev-product-breakdown">
    <div>ProductBreakdown
      <br></br><label for="size-hr">Size:</label>
       <hr id="size-hr" className="prod-bar-graph"></hr>
      <table>
        <tr id="size-table">
          <th id="sth1" >Too small</th>
          <th id="sth2">Perfect</th>
          <th id="sth3">Too big</th>
        </tr>
      </table>

      <br></br><label for="comfort-hr">Comfort:</label>
       <hr id="comfort-hr"className="prod-bar-graph"></hr>
      <table id="comfort-table">
        <tr>
          <th id="cth1">Poor</th>
          <th id="cth2">Perfect</th>
        </tr>
      </table>
    </div>
  </div>
)

export default ProductBreakdown;
