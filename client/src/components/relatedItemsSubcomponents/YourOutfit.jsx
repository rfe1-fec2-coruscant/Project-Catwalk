import React from 'react';
import ProductCard from './ProductCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const PlusElement = <FontAwesomeIcon icon={faPlus} />

class YourOutfit extends React.Component {

  constructor(props) {
    super(props);
    this.handleAddOutfitClick = this.handleAddOutfitClick.bind(this);
    this.handleAddOutfit = this.props.handleAddOutfit;
    this.state = {
      yourOutfitIds: this.props.yourOutfitIds,
      // currentProductId: this.props.currentProductId,
      isCurrentProductAdded: false
    }
  }

  handleAddOutfitClick() {
    if (this.state.isCurrentProductAdded) {
      console.log('already added!');
    } else {
      // send current product id up to top component so that it can add it to the id array
      this.handleAddOutfit();
      this.setState({ isCurrentProductAdded: true });
    }
  }

  componentDidUpdate() {
    console.log('hiii');
  }

  render() {
    return (
      <div className='your-outfit-cards'>
        <div className='product-card add-outfit' onClick={this.handleAddOutfitClick}>
          <span className='plus-icon'>{PlusElement}</span>
          <span className='add-outfit-text'>Add to Outfit</span>
        </div>
        {this.state.yourOutfitIds.map(yourOutfitId => <ProductCard isYourOutfit={true} relatedProductId={yourOutfitId} key={yourOutfitId} handleOutfitRemove={this.props.handleOutfitRemove} />)}
      </div>
    );
  }
}

export default YourOutfit;