// import React from 'react';
import { useState } from "react";

import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";

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
      <Modal  isopen={isopen} onclose={onclose} > 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, itaque at necessitatibus reprehenderit quis quo deleniti nostrum architecto libero repellendus, assumenda voluptatum velit doloribus est facere inventore. Qui, voluptas maxime?
      </Modal>
      
    </div>
  );
};

export default App;