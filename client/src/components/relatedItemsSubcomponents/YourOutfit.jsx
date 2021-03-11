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
    this.handleNextYourOutfitClick = this.handleNextYourOutfitClick.bind(this);
    this.handlePreviousYourOutfitClick = this.handlePreviousYourOutfitClick.bind(this);
    this.state = {
      yourOutfitIds: this.props.yourOutfitIds,
      isCurrentProductAdded: this.props.isCurrentProductAdded,
      shownProducts: this.props.yourOutfitIds,
      hiddenProductsRight: [],
      hiddenProductsLeft: [],
      isNothingHiddenRight: true,
      isNothingHiddenLeft: true
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

  handleNextYourOutfitClick() {
    // shift first item from hiddenProductsRight and push it to shown products
    // shift first item from shownproducts and push it to hidden products left
    var updatedShownProducts = this.state.shownProducts;
    var updatedHiddenProductsRight = this.state.hiddenProductsRight;
    var updatedHiddenProductsLeft = this.state.hiddenProductsLeft;
    updatedShownProducts.push(updatedHiddenProductsRight.shift());
    updatedHiddenProductsLeft.push(updatedShownProducts.shift());
    var updatedIsNothingHiddenRight = updatedHiddenProductsRight.length === 0 ? true : false;
    this.setState({
      shownProducts: updatedShownProducts,
      hiddenProductsRight: updatedHiddenProductsRight,
      hiddenProductsLeft: updatedHiddenProductsLeft,
      isNothingHiddenRight: updatedIsNothingHiddenRight,
      isNothingHiddenLeft: false
    });
  }

  handlePreviousYourOutfitClick() {
    // pop last item from hiddenProductsLeft and unshift it to shown products
    // pop last item from shown products and unshift it to hiddenproductsright
    var updatedShownProducts = this.state.shownProducts;
    var updatedHiddenProductsRight = this.state.hiddenProductsRight;
    var updatedHiddenProductsLeft = this.state.hiddenProductsLeft;
    updatedShownProducts.unshift(updatedHiddenProductsLeft.pop());
    updatedHiddenProductsRight.unshift(updatedShownProducts.pop());
    var updatedIsNothingHiddenLeft = updatedHiddenProductsLeft.length === 0 ? true : false;
    this.setState({
      shownProducts: updatedShownProducts,
      hiddenProductsRight: updatedHiddenProductsRight,
      hiddenProductsLeft: updatedHiddenProductsLeft,
      isNothingHiddenLeft: updatedIsNothingHiddenLeft,
      isNothingHiddenRight: false
    });
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
      var updatedIsNothingHiddenRight = this.state.isNothingHiddenRight;
      var updatedHiddenProductsRight = this.state.hiddenProductsRight;
      var updatedShownProducts = this.props.yourOutfitIds;
      // var updatedIsNothingHiddenLeft = this.state.isNothingHiddenLeft;
      // var updatedHiddenProductsLeft = this.state.hiddenProductsLeft;
      if (this.props.yourOutfitIds.length > 3) {
        updatedIsNothingHiddenRight = false;
        updatedShownProducts = this.props.yourOutfitIds.slice(0, 3);
        updatedHiddenProductsRight = this.props.yourOutfitIds.slice(3);
      } else {
        updatedHiddenProductsRight = [];
        updatedIsNothingHiddenRight = true;
      }

      this.setState({
        isCurrentProductAdded: this.props.isCurrentProductAdded,
        yourOutfitIds: this.props.yourOutfitIds,
        isNothingHiddenRight: updatedIsNothingHiddenRight,
        shownProducts: updatedShownProducts,
        hiddenProductsRight: updatedHiddenProductsRight,
        isNothingHiddenLeft: true,
        hiddenProductsLeft: []
      });
    }
  }

  render() {

    if (this.state.isNothingHiddenRight && this.state.isNothingHiddenLeft) {
      return (
        <div className='your-outfit-cards'>
          <div className='product-card add-outfit' onClick={this.handleAddOutfitClick}>
            <span className='plus-icon'>{PlusElement}</span>
            <span className='related-items-header-text add-outfit-text'>Add to Outfit</span>
          </div>
          {this.state.shownProducts.map(yourOutfitId => <ProductCard isYourOutfit={true} relatedProductId={yourOutfitId} key={'YO: ' + yourOutfitId} handleOutfitRemove={this.props.handleOutfitRemove} handleProductDetailRender={this.props.handleProductDetailRender}/>)}
        </div>
      );
    } else if (this.state.isNothingHiddenLeft) {
      return (
        <div className='your-outfit-cards'>
        <div className='product-card add-outfit' onClick={this.handleAddOutfitClick}>
          <span className='plus-icon'>{PlusElement}</span>
          <span className='add-outfit-text'>Add to Outfit</span>
        </div>
        {this.state.shownProducts.map(yourOutfitId => <ProductCard isYourOutfit={true} relatedProductId={yourOutfitId} key={'YO: ' + yourOutfitId} handleOutfitRemove={this.props.handleOutfitRemove} handleProductDetailRender={this.props.handleProductDetailRender}/>)}
        <button type='button' className='change-your-outfit-button' onClick={this.handleNextYourOutfitClick}>&#62;</button>
      </div>
      );
    } else if (this.state.isNothingHiddenRight) {
      return (
        <div className='your-outfit-cards'>
          <div className='product-card add-outfit' onClick={this.handleAddOutfitClick}>
            <span className='plus-icon'>{PlusElement}</span>
            <span className='add-outfit-text'>Add to Outfit</span>
          </div>
          <button type='button' className='change-your-outfit-button' onClick={this.handlePreviousYourOutfitClick}>&#60;</button>
          {this.state.shownProducts.map(yourOutfitId => <ProductCard isYourOutfit={true} relatedProductId={yourOutfitId} key={'YO: ' + yourOutfitId} handleOutfitRemove={this.props.handleOutfitRemove} handleProductDetailRender={this.props.handleProductDetailRender} />)}
        </div>
      );
    } else {
      return (
        <div className='your-outfit-cards'>
          <div className='product-card add-outfit' onClick={this.handleAddOutfitClick}>
            <span className='plus-icon'>{PlusElement}</span>
            <span className='add-outfit-text'>Add to Outfit</span>
          </div>
          <button type='button' className='change-your-outfit-button' onClick={this.handlePreviousYourOutfitClick}>&#60;</button>
          {this.state.shownProducts.map(yourOutfitId => <ProductCard isYourOutfit={true} relatedProductId={yourOutfitId} key={'YO: ' + yourOutfitId} handleOutfitRemove={this.props.handleOutfitRemove} handleProductDetailRender={this.props.handleProductDetailRender} />)}
          <button type='button' className='change-your-outfit-button' onClick={this.handleNextYourOutfitClick}>&#62;</button>
        </div>
      );
    }
  }
}

export default YourOutfit;