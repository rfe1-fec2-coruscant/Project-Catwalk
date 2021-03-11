import React from 'react';

class ProductBreakdown extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      showSize: false,
      showWidth: false,
      showComfort: false,
      showQuality: false,
      showLength: false,
      showFit: false
    }
    this.allCharacteristics = {
      0: 'Size',
      1: 'Width',
      2: 'Comfort',
      3: 'Quality',
      4: 'Length',
      5: 'Fit'
    }
  }

  componentDidMount() {
  //  let characteristics = this.findCorrectCharacteristics()
  //  let values = Object.values(characteristics)
  //  let allValues = Object.values(this.allCharacteristics)

  //   for (let i = 0; i < allValues.length; i ++) {
  //     if (allValues[i] === values[i]) {
  //       if (values[i] === 'Size') {
  //         this.setState({ showSize: true})
  //       } else if (values[i] === 'Width') {
  //         this.setState({ showWidth: true })
  //       } else if (values[i] === 'Comfort') {
  //         this.setState({ showComfort: true })
  //       } else if (values[i] === 'Quality') {
  //         this.setState({ showQuality: true })
  //       } else if (values[i] === 'Length') {
  //         this.setState({ showLength: true })
  //       } else if (values[i] === 'Fit') {
  //         this.setState({ showFit: true })
  //       }
  //     }
  //   }

  }

  findCorrectCharacteristics () {
    let characteristics = Object.keys(curProductMeta.characteristics)
    let allCharacteristics = {
      0: 'Size',
      1: 'Width',
      2: 'Comfort',
      3: 'Quality',
      4: 'Length',
      5: 'Fit'
    }
    for (let i = 0; i < 5; i++) {
      if (characteristics.indexOf(allCharacteristics[i] === -1)) {
        allCharacteristics[i] = '';
      }
    }
    return allCharacteristics
  }
  // Size, Width, Comfort, Quality, Length, and Fit.

  render() {
    const { curProductMeta } = this.props;
    return (
      <div id="rev-product-breakdown">
        <div id='here' >ProductBreakdown

        <br></br><input type="range" min="1" max="100" id="size-bar-size" className="prod-char-bar" />
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
  }
}
export default ProductBreakdown;
