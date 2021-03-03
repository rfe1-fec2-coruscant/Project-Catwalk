import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const PlusElement = <FontAwesomeIcon icon={faPlus} />

class YourOutfit extends React.Component {

  constructor(props) {
    super(props);
    this.handleAddOutfitClick = this.handleAddOutfitClick.bind(this);
    this.state = {
      yourOutfits: this.props.yourOutfits,
      currentProduct: this.props.currentProduct
    }
  }

  handleAddOutfitClick() {
    console.log('trying to add:', this.state.currentProduct);
  }

  render() {
    // var { yourOutfits } = this.props;
    return (
      <div>
        <div className='product-card add-outfit' onClick={this.handleAddOutfitClick}>
          <span className='plus-icon'>{PlusElement}</span>
          <span className='add-outfit-text'>Add to Outfit</span>
        </div>
      </div>
    );
  }
}

export default YourOutfit;