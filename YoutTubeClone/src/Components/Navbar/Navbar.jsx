import './Navbar.css'
import { asset } from '../../assets/asset'
import youtube from '../../Images/youtube.svg'
import { Link } from 'react-router-dom';

const Navbar = ({setSidebar}) => {
    return (
        <nav>
            <div className='nav-left'>
                <img onClick={() => setSidebar(prev=>prev===false?true:false)} className='menu' src={asset.menu} alt="" />
                <Link to={'/'}><img className='logo' src={youtube} alt="" /></Link>
            </div>

            <div className="nav-middle">
                <div className="search-box">
                    <input type="text" placeholder='Search Here' />
                    <img src={asset.search} alt="" />
                </div>
            </div>

            <div className="nav-right">
                <img src={asset.upload} alt="" />
                <img src={asset.more} alt="" />
                <img src={asset.notification} alt="" />
                <img className='profile' src={asset.jack} alt="" />
            </div>
        </nav>
    );
};

export default Navbar;