import React from 'react'
import QuestionList from './Questions and Answers module/Questionlist'
import Searchbar from './Questions and Answers module/Searchbar'


export default function Questions(props) {
  return (
    <div className="q-and-a">
      <h2 className= "header">QUESTIONS AND ANSWERS</h2>
      <Searchbar/>
      <QuestionList/>
      {/* <div>
        <button className="largeButton">MORE ANSWERED QUESTIONS</button>
        <button className="largeButton">ADD A QUESTION +</button>
      </div> */}
     </div>
  )

};