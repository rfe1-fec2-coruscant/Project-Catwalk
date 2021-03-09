import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Searchbar from './../Searchbar.jsx';
import QuestionList from './../QuestionList.jsx';


test("renders Searchbar without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render(<Searchbar/>, div)
})

// test("renders searchbar correctly", ()=>{
//   render(<Searchbar/>)
// })

test("renders QuestionList without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render(<QuestionList/>, div)
})