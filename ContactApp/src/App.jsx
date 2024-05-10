// import React from 'react';
import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import AddandUpdateContact from "./components/AddandUpdateContact/AddandUpdateContact";

const App = () => {
  const [isopen, setIsopen] = useState(false)

  const onopen = () => {
    setIsopen(true)
  }

  const onclose = () => {
    setIsopen(false)
  }
  return (
    <div className="mx-auto max-w-[370px]">
      <Navbar onopen={onopen} isopen={isopen} />
      <AddandUpdateContact onclose={onclose} isopen={isopen} />
    </div>
  );
};

export default App;