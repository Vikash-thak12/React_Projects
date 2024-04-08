import './Quiz.css'
const Quiz = () => {
  return (
    <div className="container">
        <h1>Quiz App</h1>
        <hr />
        <h2>Who was the first president of India?</h2>
        <ul>
            <li>vikash</li>
            <li>sharma</li>
            <li>vikash</li>
            <li>vikash</li>
        </ul>
        <button className='index'>Next</button>
        <div className='question'> 1 out of 5 Questions</div>
    </div>
  );
};

export default Quiz;