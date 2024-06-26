import { useRef, useState } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  // when the setlock is false i can select any of the option and when the lock is true then i can't select any option
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [optionSelected, setOptionSelected] = useState(false); 

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);

  const option_array = [option1, option2, option3, option4];

  const checkans = (e, ans) => {
    if (!lock) {
      setOptionSelected(true); // Update option selected state
      if (question.ans === ans) {
        e.target.classList.add('correct');
        setLock(true);
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add('wrong');
        setLock(true);
        option_array[question.ans - 1].current.classList.add('correct');
      }
    }
  };

  const next = () => {
    if (lock && optionSelected) { // Check if an option is selected
      if (index === data.length - 1) {
        setResult(true);
      } else {
        setIndex(prevIndex => prevIndex + 1);
        setQuestion(data[index + 1]);
        setLock(false);
        setOptionSelected(false); // Reset option selected state
        option_array.forEach(option => option.current.classList.remove('correct', 'wrong'));
      }
    } else {
      alert('Please select an option.'); // Alert if no option is selected
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
    setOptionSelected(false); // Reset option selected state
    option_array.forEach(option => option.current.classList.remove('correct', 'wrong'));
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {result ? (
        <>
          <div className="question">Your scored {score} out of {data.length}</div>
          <button onClick={reset}>Restart Quiz</button>
        </>
      ) : (
        <>
          <h2>{index + 1}. {question.question}</h2>
          <ul>
            <li ref={option1} onClick={(e) => { checkans(e, 1) }}>{question.option1} </li>
            <li ref={option2} onClick={(e) => { checkans(e, 2) }}>{question.option2} </li>
            <li ref={option3} onClick={(e) => { checkans(e, 3) }}>{question.option3} </li>
            <li ref={option4} onClick={(e) => { checkans(e, 4) }}>{question.option4} </li>
          </ul>
          <button onClick={next} className="index">Next</button>
          <div className="question"> {index + 1} out of {data.length} Questions</div>
        </>
      )}
    </div>
  );
};

export default Quiz;
