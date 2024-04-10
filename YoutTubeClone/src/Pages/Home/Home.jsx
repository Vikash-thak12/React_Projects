import Feed from '../../Components/Feed/Feed';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Home.css'

const Home = ({sidebar}) => {
  return (
    <div className='main'>
    <Sidebar sidebar={sidebar} />
    {/* <div className={`container ${sidebar?"": "large-container"}`}>
    </div> */}
      <Feed />
    </div>
  );
};

export default Home;