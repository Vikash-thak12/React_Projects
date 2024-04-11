import './Sidebar.css'
import { asset } from '../../assets/asset'

const Sidebar = ({sidebar}) => {
  return (
    <>
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-links">
            <div className="sidelink">
                <img src={asset.home} alt="" />
                <p>Home</p>
            </div>
            <div className="sidelink">
                <img src={asset.game_icon} alt="" />
                <p>Games</p>
            </div>
            <div className="sidelink">
                <img src={asset.automobiles} alt="" />
                <p>Automobiles</p>
            </div>
            <div className="sidelink">
                <img src={asset.sports} alt="" />
                <p>Sports</p>
            </div>
            <div className="sidelink">
                <img src={asset.entertainment} alt="" />
                <p>Entertainment</p>
            </div>
            <div className="sidelink">
                <img src={asset.blogs} alt="" />
                <p>Blogs</p>
            </div>
            <div className="sidelink">
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