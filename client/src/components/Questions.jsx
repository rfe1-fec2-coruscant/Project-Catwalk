import React from 'react'
import Searchbar from './Questions and Answers module/Searchbar'


export default function Questions(props) {
  return (
    <div className="q-and-a">
      <h2 className= "header">QUESTIONS AND ANSWERS</h2>
      <Searchbar
        product={props.product}/>
     </div>
  )

};