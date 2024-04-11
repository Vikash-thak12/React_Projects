import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/Pages/Home/Home'
import Video from '../src/Pages/Video/Video'
import { useState } from "react";


const App = () => {

  const [sidebar, setSidebar] = useState(true)


  return (
    <>
    <Navbar setSidebar={setSidebar} />
    <Routes>
      <Route path='/' element={<Home sidebar={sidebar} />} ></Route>
      <Route path='/video/:categoryId/:videoId' element={<Video/>} ></Route>
    </Routes>
    </>
  );
};
  
export default App;