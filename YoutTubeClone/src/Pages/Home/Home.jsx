import { useState } from 'react';
import Feed from '../../Components/Feed/Feed';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Home.css'

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0)
  return (
    <div className='main'>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed category={category} />
      </div>
    </div>
  );
};

export default Home;