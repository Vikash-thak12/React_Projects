import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data'


const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);

  const checkans = (e, ans) => {
    if (question.ans === ans) {
      e.target.classList.add("correct")
    } else {
      e.target.classList.add("wrong")
    }
  }
  return (

    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>{index + 1}. {question.question}</h2>
      <ul>
        <li onClick={(e) => {checkans(e,1)}}>{question.option1} </li>
        <li onClick={(e) => {checkans(e,2)}}>{question.option2} </li>
        <li onClick={(e) => {checkans(e,3)}}>{question.option3} </li>
        <li onClick={(e) => {checkans(e,4)}}>{question.option4} </li>
      </ul>
      <button className='index'>Next</button>
      <div className='question'> 1 out of 5 Questions</div>
    </div>
  );
};

export default Quiz;