// import React from 'react';
import useDisclose from "./hooks/useDisclose";

import Navbar from "./components/Navbar/Navbar";
import AddandUpdateContact from "./components/AddandUpdateContact/AddandUpdateContact";

const App = () => {

  const {isopen,onclose, onopen} = useDisclose()
  return (
    <div className="mx-auto max-w-[370px]">
      <Navbar onopen={onopen} isopen={isopen} />
      <AddandUpdateContact onclose={onclose} isopen={isopen} isupdate />
    </div>
  );
};

export default App;