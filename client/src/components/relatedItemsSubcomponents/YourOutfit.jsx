import React from 'react';
import ProductCard from './ProductCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ajaxRequests from '../../../ajaxRequests.js';

const PlusElement = <FontAwesomeIcon icon={faPlus} />

class YourOutfit extends React.Component {

  constructor(props) {
    super(props);
    this.handleAddOutfitClick = this.handleAddOutfitClick.bind(this);
    this.handleAddOutfit = this.props.handleAddOutfit;
    this.setYourOutfitIdsOnInitialMount = this.props.setYourOutfitIdsOnInitialMount;
    this.state = {
      yourOutfitIds: this.props.yourOutfitIds,
      // yourOufitIds: [19828, 19405, 20069, 19741, 19788],
      isCurrentProductAdded: this.props.isCurrentProductAdded
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

  componentDidMount() {
    // request session data from server (yourOutfit array)
    ajaxRequests.getYourOutfits(yourOutfits => {
      // send it up to main component
      this.setYourOutfitIdsOnInitialMount(yourOutfits);
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.isCurrentProductAdded !== prevProps.isCurrentProductAdded || this.props.yourOutfitIds !== prevProps.yourOutfitIds) {
      this.setState({
        isCurrentProductAdded: this.props.isCurrentProductAdded,
        yourOutfitIds: this.props.yourOutfitIds
      });
    }
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