import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const PlusElement = <FontAwesomeIcon icon={faPlus} />

var YourOutfit = ({ yourOutfits }) => (
  <div>
    <div className='product-card add-outfit'>
      <span className='plus-icon'>{PlusElement}</span>
      <br></br>
      <span className='add-outfit-text'>Add to Outfit</span>
    </div>
  </div>
);

export default YourOutfit;