import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/Pages/Home/Home'
import Video from '../src/Pages/Video/Video'


const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/video/:categoryId/:videoId' element={<Video/>} ></Route>
    </Routes>
    </>
  );
};

export default App;