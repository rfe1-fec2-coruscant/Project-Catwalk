import React from 'react'
import Searchbar from './Questions and Answers module/Searchbar'


export default function Questions(props) {
  return (
    <div className="center-subwidgets q-and-a widget">
      <h2 className= "header header-text">QUESTIONS AND ANSWERS</h2>
      <Searchbar
      currentProductId={props.currentProductId}/>
     </div>
  )

};