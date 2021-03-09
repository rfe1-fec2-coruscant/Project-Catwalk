import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Searchbar, {sortQuestions}  from './../Searchbar.jsx';
import QuestionList from './../QuestionList.jsx';
import Question from './../Question.jsx';



test("renders Searchbar without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render(<Searchbar/>, div)
})


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

var sampleQuestionA = {
  question_body: "Where is this made?",
  question_helpfulness: 1
}

var sampleQuestionB = {
  question_body: "Why should I buy this?",
  question_helpfulness: 2
}

it("renders question body", () => {
  act(() => {
    render(<Question question={sampleQuestionA} />, container);
  });
  expect(container.textContent).toContain("Where is this made?");

  act(() => {
    render(<Question question={sampleQuestionB} />, container);
  });
  expect(container.textContent).toContain("Why should I buy this?");
});


// it("sorts Questions by helpfulness", async () => {
//   act(() => {
//     render(<Searchbar/>, container);
//     await Searchbar.sortQuestions([sampleQuestionB, sampleQuestionA]);
//   });
//   expect(Searchbar.state.questions).toBe([SampleQuestionA, sampleQuestionB]);

// });


// it("sorts Questions by helpfulness", () => {
//   expect(sortQuestions([sampleQuestionB, sampleQuestionA])).toBe([sampleQuestionA, sampleQuestionB]);
// });


