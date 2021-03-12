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


  }

  componentDidMount() {
    this.setCharacteristicsState()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.curProductMeta !== this.props.curProductMeta) {
      this.setCharacteristicsState()
    }
  }

  setCharacteristicsState() {
    let prodValues = Object.keys(this.props.curProductMeta.characteristics)
    if (prodValues.includes('Size')) {
      this.setState({ showSize: true })
    }
    if (prodValues.includes('Width')) {
      this.setState({ showWidth: true })
    }
     if (prodValues.includes('Comfort')) {
      this.setState({ showComfort: true })
    }
     if (prodValues.includes('Quality')) {
      this.setState({ showQuality: true })
    }
    if (prodValues.includes('Length')) {
      this.setState({ showLength: true })
    }
     if (prodValues.includes('Fit')) {
      this.setState({ showFit: true })
    }
  }

  renderSizeBar() {
    let value = (this.props.curProductMeta.characteristics['Size'].value / 5) * 100
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
  }

  renderWidthBar() {
    let value = (this.props.curProductMeta.characteristics['Width'].value / 5) * 100
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
  }

  renderComfortBar() {
    let value = (this.props.curProductMeta.characteristics['Comfort'].value / 5) * 100
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
  }

  renderQualityBar() {
    let value = (this.props.curProductMeta.characteristics['Quality'].value / 5) * 100
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
  }

  renderLengthBar() {
    let value = (this.props.curProductMeta.characteristics['Length'].value / 5) * 100
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
  }

  renderFitBar() {
    let value = (this.props.curProductMeta.characteristics['Fit'].value / 5) * 100
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
  }

  // Size, Width, Comfort, Quality, Length, and Fit.

  render() {
    // console.log('Cmon Now', )
    // console.log('heres my state', this.state)
    // console.log('heres my chars', this.props.curProductMeta.characteristics)

      return (
        <div id="rev-product-breakdown">
          <div id='here' >ProductBreakdown</div>
            {this.state.showSize ? this.renderSizeBar() : ''}
            {this.state.showWidth ? this.renderWidthBar() : ''}
            {this.state.showFit ? this.renderFitBar() : ''}
            {this.state.showLength ? this.renderLengthBar() : ''}
            {this.state.showQuality ? this.renderQualityBar() : ''}
            {this.state.showComfort ? this.renderComfortBar() : ''}
        </div>
      )

  }
}
export default ProductBreakdown;
