import React from 'react';
const Characteristics = () => {
  return (
    <div id="rev-characteristics" className="rev-modal-input"  >Characteristics:
      <div required>Size:
        <input type="radio" className="size-rating" />NONE
        <input type="radio" className="size-rating" />A size too small
        <input type="radio" className="size-rating" />½ a size too small
        <input type="radio" className="size-rating" />Perfect
        <input type="radio" className="size-rating" />½ a size too big
        <input type="radio" className="size-rating" />A size too wide
      </div>

      <div required>Width:
        <input type="radio" className="size-rating" />NONE
        <input type="radio" className="size-rating" />Too narrow
        <input type="radio" className="size-rating" />Slightly narrow
        <input type="radio" className="size-rating" />Perfect
        <input type="radio" className="size-rating" />Slightly wide
        <input type="radio" className="size-rating" />Too wide
       </div>

      <div required>Comfort:
        <input type="radio" className="size-rating" />NONE
        <input type="radio" className="size-rating" />Uncomfortable
        <input type="radio" className="size-rating" />Slightly uncomfortable
        <input type="radio" className="size-rating" />Ok
        <input type="radio" className="size-rating" />Comfortable
        <input type="radio" className="size-rating" />Perfect
      </div>

      <div required>Quality:
          <input type="radio" className="size-rating" />NONE
          <input type="radio" className="size-rating" />Poor
          <input type="radio" className="size-rating" />Below average
          <input type="radio" className="size-rating" />What I expected
          <input type="radio" className="size-rating" />Pretty great
          <input type="radio" className="size-rating" />Perfect
         </div>

      <div required>Length:
          <input type="radio" className="size-rating" />NONE
          <input type="radio" className="size-rating" />Runs Short
          <input type="radio" className="size-rating" />Runs slightly short
          <input type="radio" className="size-rating" />Perfect
          <input type="radio" className="size-rating" />Runs slightly long
          <input type="radio" className="size-rating" />Runs long
          </div>

      <div required>Fit:
        <input type="radio" className="size-rating" />NONE
        <input type="radio" className="size-rating" />Runs tight
        <input type="radio" className="size-rating" />Runs slightly tight
        <input type="radio" className="size-rating" />Perfect
        <input type="radio" className="size-rating" />Runs slightly long
        <input type="radio" className="size-rating" />A size too wide
      </div>

    </div>
  );
};

export default Characteristics;


