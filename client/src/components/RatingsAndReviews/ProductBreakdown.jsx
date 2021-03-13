import React from 'react';

class ProductBreakdown extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      characteristics: this.props.curProductMeta.characteristics
      // showSize: false,
      // showWidth: false,
      // showComfort: false,
      // showQuality: false,
      // showLength: false,
      // showFit: false
    }


  }

  //this.props.curProductMets.characteristics.{size/width/comfort/quality/length/fit}

  componentDidMount() {
    // this.setCharacteristicsState()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.curProductMeta !== this.props.curProductMeta) {
      this.setState({characteristics: this.props.curProductMeta.characteristics});
      console.log('characteristics', this.state.characteristics);
      // this.setCharacteristicsState()
    }
  }

  // setCharacteristicsState() {
  //   var expectedChars = ['size', 'width', 'comfort', 'quality', 'length', 'fit'];
  //   var renderFunctions = [renderSizeBar, renderWidthBar, renderComfortBar, renderQualityBar, renderLengthBar, renderFitBar];

  //   for (var i = 0; i < expectedChars.length; i++) {
  //     if (this.state.characteristics[expectedChars[i]]) {
  //       this[renderFunctions[i]]();
  //     }
  //   }

    // this.state.characteristics[]

  //     let prodValues = Object.keys(this.props.curProductMeta.characteristics)
  //     if (prodValues.includes('Size')) {
  //       this.setState({ showSize: true })
  //     } else {
  //       this.setState({ showSize: false })
  //     }

  //     if (prodValues.includes('Width')) {
  //       this.setState({ showWidth: true })
  //     } else {
  //       this.setState({ showWidth: false })
  //     }

  //      if (prodValues.includes('Comfort')) {
  //       this.setState({ showComfort: true })
  //      } else {
  //        this.setState({ showComfort: false })
  //      }

  //      if (prodValues.includes('Quality')) {
  //       this.setState({ showQuality: true })
  //     } else {
  //      this.setState({ showQuality: false })
  //      }

  //     if (prodValues.includes('Length')) {
  //       this.setState({ showComfort: true })
  //     } else {
  //       this.setState({ showComfort: false })
  //     }

  //      if (prodValues.includes('Fit')) {
  //       this.setState({ showFit: true })
  //      } else {
  //        this.setState({ showFit: false })
  //      }
  // }

  renderSizeBar() {
    if (this.state.characteristics.Size) {
      console.log('this.state.characteristics.Size', this.state.characteristics.Size);
      //let value = (this.props.curProductMeta.characteristics['Size'].value / 5) * 100
      let value = (this.state.characteristics.Size.value/5) * 100
      return (
        <div>
          <br></br><input type="range" min="1" max="100" value={value} id="size-bar-size" className="prod-char-bar" />
          <table>
            <tbody>
              <tr id="size-table">
                <th id="sth1" >Too small</th>
                <th id="sth2">Perfect</th>
                <th id="sth3">Too big</th>
              </tr>
            </tbody>
          </table>
        </div>
      )
    } else {
      return <div></div>
    }
  }
/*

 ""characteristics": {
      "Fit": {
          "id": 64068,
          "value": "3.0434782608695652"
        },

      "Length"
          "id": 64069,
          "value": "3.3478260869565217"
          },

      "Comfort": {
          "id": 64070,
          "value": "3.4347826086956522"

        Quality": {
          id": 64071,
          value": "3.6956521739130435"


  */
  ///(this.props.curProductMeta.characteristics)
  ///

  renderWidthBar() {

    if (this.state.characteristics.Width) {
      //let value = (this.props.curProductMeta.characteristics['Width'].value / 5) * 100
      let value = (this.state.characteristics.Width.value/5) * 100
      return (
        <div>
          <br></br><input type="range" min="1" max="100" value={value} id="size-bar-width" className="prod-char-bar" />
          <table>
            <tbody>
              <tr>
                <th id="sth1" >Too small</th>
                <th id="sth2">Perfect</th>
                <th id="sth3">Too big</th>
              </tr>
            </tbody>
          </table>
        </div>
      )
    } else {
      return <div></div>
    }
  }

  renderComfortBar() {
    if (this.state.characteristics.Comfort) {
      //let value = (this.props.curProductMeta.characteristics['Comfort'].value / 5) * 100
      let value = (this.state.characteristics.Comfort.value/5) * 100
      return (
        <div>
          <br></br><input type="range" min="1" max="100" value={value} id="size-bar-comfort" className="prod-char-bar" />
          <table>
            <tbody>
              <tr id="size-table">
                <th id="cth1">Poor</th>
                <th id="cth2">Perfect</th>
              </tr>
            </tbody>
          </table>
        </div>
      )
    } else {
      return <div></div>
    }
  }

  renderQualityBar() {
    if (this.state.characteristics.Quality) {
    //let value = (this.props.curProductMeta.characteristics['Quality'].value / 5) * 100
    let value = (this.state.characteristics.Quality.value/5) * 100
    return (
      <div>
        <br></br><input type="range" min="1" max="100" value={value} id="size-bar-quality" className="prod-char-bar" />
        <table>
          <tbody>
            <tr>
              <th id="cth1">Poor</th>
              <th id="cth2">Perfect</th>
            </tr>
          </tbody>
        </table>
      </div>
     )
    } else {
      return <div></div>
    }
  }

  renderLengthBar() {
    if (this.state.characteristics.Length) {
      //let value = (this.props.curProductMeta.characteristics['Length'].value / 5) * 100
      let value = (this.state.characteristics.Length.value/5) * 100
        return (
          <div>
            <br></br><input type="range" min="1" max="100" value={value} id="size-bar-length" className="prod-char-bar" />
            <table>
              <tbody>
                <tr id="size-table">
                  <th id="sth1" >Too small</th>
                  <th id="sth2">Perfect</th>
                  <th id="sth3">Too big</th>
                </tr>
              </tbody>
            </table>
          </div>
        )
      } else {
        return <div></div>
      }
  }

  renderFitBar() {
    if (this.state.characteristics.Fit) {
      console.log('this.state.characteristics.Fit', this.state.characteristics.Fit);
      console.log('this.props.curProductMeta.characteristics.Fit', this.props.curProductMeta.characteristics.Fit);
      //let value = (this.props.curProductMeta.characteristics['Fit'].value / 5) * 100
      let value = (this.state.characteristics.Fit.value/5) * 100
      return (
        <div>
          <br></br><input type="range" min="1" max="100" value={value} id="size-bar-fit" className="prod-char-bar" />
          <table>
            <tbody>
              <tr>
                <th id="sth1" >Too small</th>
                <th id="sth2">Perfect</th>
                <th id="sth3">Too big</th>
              </tr>
            </tbody>
          </table>
        </div>
      )
    } else {
      return <div></div>
    }
  }

  // Size, Width, Comfort, Quality, Length, and Fit.

  render() {
    // console.log('Cmon Now', )
    // console.log('heres my state', this.state)
    // console.log('heres my chars', this.props.curProductMeta.characteristics)

      return (
        <div id="rev-product-breakdown">
          <div id='here' >ProductBreakdown</div>
            {this.renderSizeBar()}
            {this.renderWidthBar()}
            {this.renderFitBar()}
            {this.renderLengthBar()}
            {this.renderQualityBar()}
            {this.renderComfortBar()}
        </div>
      )

  }
}
export default ProductBreakdown;
