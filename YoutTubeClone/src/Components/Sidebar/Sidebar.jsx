import './Sidebar.css'
import { asset } from '../../assets/asset'

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <>
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-links">
            <div className={`sidelink ${category===0?"active":""}`} onClick={()=> setCategory(0)}>
                <img src={asset.home} alt="" />
                <p>Home</p>
            </div>
            <div className={`sidelink ${category===20?"active":""}`} onClick={() => setCategory(20)}>
                <img src={asset.game_icon} alt="" />
                <p>Games</p>
            </div>
            <div className={`sidelink ${category===2?"active":""}`} onClick={() => setCategory(2)}>
                <img src={asset.automobiles} alt="" />
                <p>Automobiles</p>
            </div>
            <div className={`sidelink ${category===17?"active":""}`} onClick={() => setCategory(17)}>
                <img src={asset.sports} alt="" />
                <p>Sports</p>
            </div>
            <div className={`sidelink ${category===24?"active":""}`} onClick={() => setCategory(24)}>
                <img src={asset.entertainment} alt="" />
                <p>Entertainment</p>
            </div>
            <div className={`sidelink ${category===22?"active":""}`} onClick={() => setCategory(22)}>
                <img src={asset.blogs} alt="" />
                <p>Blogs</p>
            </div>
            <div className={`sidelink ${category===25?"active":""}`} onClick={() => setCategory(25)}>
                <img src={asset.news} alt="" />
                <p>News</p>
            </div>
            <hr />
        </div>
    
        <div className="subscribed-links">
            <h2>Subscriptions</h2>
            <div className="sidelink">
                <img src={asset.jack} alt="" />
                <p>Carry Minati</p>
            </div>
            <div className="sidelink">
                <img src={asset.simon} alt="" />
                <p>Round2Hell</p>
            </div>
            <div className="sidelink">
                <img src={asset.tom} alt="" />
                <p>Dhruv Rathee</p>
            </div>
            <div className="sidelink">
                <img src={asset.megan} alt="" />
                <p>Professor</p>
            </div>
            <div className="sidelink">
                <img src={asset.cameron} alt="" />
                <p>BB ki Vines</p>
            </div>
            {/* <div className="sidelink">
                <img src={asset.cameron} alt="" />
                <p>BB ki Vines</p>
            </div>
            <div className="sidelink">
                <img src={asset.cameron} alt="" />
                <p>BB ki Vines</p>
            </div>
            <div className="sidelink">
                <img src={asset.cameron} alt="" />
                <p>BB ki Vines</p>
            </div>
            <div className="sidelink">
                <img src={asset.cameron} alt="" />
                <p>BB ki Vines</p>
            </div>
            <div className="sidelink">
                <img src={asset.cameron} alt="" />
                <p>BB ki Vines</p>
            </div> */}
        </div>
    </div>
    </>
  );
};

export default Sidebar;