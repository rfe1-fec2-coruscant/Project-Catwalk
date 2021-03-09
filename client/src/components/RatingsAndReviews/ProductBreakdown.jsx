import React from 'react';

var ProductBreakdown = (props) => (
  <div id="rev-product-breakdown">
    <div id='here' >ProductBreakdown

      <br></br><input type="range" min="1" max="100"  id="size-bar-size" className="prod-char-bar"/>
      <table>
        <tbody>
          <tr id="size-table">
            <th id="sth1" >Too small</th>
            <th id="sth2">Perfect</th>
            <th id="sth3">Too big</th>
          </tr>
        </tbody>
      </table>

      <br></br><input type="range" min="1" max="100" id="size-bar-width" className="prod-char-bar" />
      <table>
        <tbody>
          <tr>
            <th id="cth1">Poor</th>
            <th id="cth2">Perfect</th>
          </tr>
        </tbody>
      </table>

      <br></br><input type="range" min="1" max="100" id="size-bar-comfort" className="prod-char-bar" />
      <table>
        <tbody>
          <tr id="size-table">
            <th id="sth1" >Too small</th>
            <th id="sth2">Perfect</th>
            <th id="sth3">Too big</th>
          </tr>
        </tbody>
      </table>

      <br></br><input type="range" min="1" max="100" id="size-bar-quality" className="prod-char-bar" />
      <table>
        <tbody>
          <tr>
            <th id="cth1">Poor</th>
            <th id="cth2">Perfect</th>
          </tr>
        </tbody>
      </table>

      <br></br><input type="range" min="1" max="100" id="size-bar-length" className="prod-char-bar" />
      <table>
        <tbody>
          <tr id="size-table">
            <th id="sth1" >Too small</th>
            <th id="sth2">Perfect</th>
            <th id="sth3">Too big</th>
          </tr>
        </tbody>
      </table>

      <br></br><input type="range" min="1" max="100" id="size-bar-fit" className="prod-char-bar" />
      <table>
        <tbody>
          <tr>
            <th id="cth1">Poor</th>
            <th id="cth2">Perfect</th>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
)

export default ProductBreakdown;
