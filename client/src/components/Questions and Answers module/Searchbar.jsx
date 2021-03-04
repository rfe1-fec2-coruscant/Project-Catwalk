import React from 'react'


const Searchbar = (props) => {


  console.log(props.answer);


    return (
      <div>
        <input id="searchbar" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."></input>
      </div>
      );


};

export default Searchbar;