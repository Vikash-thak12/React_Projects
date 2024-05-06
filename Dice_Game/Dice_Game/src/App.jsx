import React, { useState } from 'react';
import PlayGame from './components/PlayGame/PlayGame';
import StartGame from './components/StartGame/StartGame';

const App = () => {

  const [isStart, setIsStart] = useState(false);

  const toggle = () => {
    setIsStart((prev) =>  !prev)
  }
  return (
    <div>
      {isStart ? <PlayGame /> : <StartGame toggle={toggle} />}
      {/* <StartGame /> */}
    </div>
  );
};

export default App;