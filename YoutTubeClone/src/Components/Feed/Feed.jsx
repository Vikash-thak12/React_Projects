import './Feed.css'
import { asset } from '../../assets/asset'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { API_KEY } from '../../data';

const Feed = ({category}) => {
    const [data,setData] = useState(0)

    const fetch_data = async () => {
        const videolist_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=70&regionCode=us&videoCategoryId=${category}&key=${API_KEY}`;
        await fetch(videolist_url).then(response=> response.json()).then(data=> setData(data.items))
    }
  return (
    <div className="feed">
        <Link to={`video/20/6834`} className="card">
            <img src={asset.thumbnail1} alt="" />
            <h2>The tranquil lake shimmered under the golden sunset, while birdsong filled the air, creating a symphony of natural beauty.</h2>
            <h3>Vikash</h3>
            <p>15k views &bull; 2 days ago</p>
        </Link>
        {/* <div className="card">
            <img src={asset.thumbnail2} alt="" />
            <h2>The tranquil lake shimmered under the golden sunset, while birdsong filled the air, creating a symphony of natural beauty.</h2>
            <h3>Vikash</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={asset.thumbnail3} alt="" />
            <h2>The tranquil lake shimmered under the golden sunset, while birdsong filled the air, creating a symphony of natural beauty.</h2>
            <h3>Vikash</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={asset.thumbnail4} alt="" />
            <h2>The tranquil lake shimmered under the golden sunset, while birdsong filled the air, creating a symphony of natural beauty.</h2>
            <h3>Vikash</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={asset.thumbnail5} alt="" />
            <h2>The tranquil lake shimmered under the golden sunset, while birdsong filled the air, creating a symphony of natural beauty.</h2>
            <h3>Vikash</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={asset.thumbnail6} alt="" />
            <h2>The tranquil lake shimmered under the golden sunset, while birdsong filled the air, creating a symphony of natural beauty.</h2>
            <h3>Vikash</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={asset.thumbnail7} alt="" />
            <h2>The tranquil lake shimmered under the golden sunset, while birdsong filled the air, creating a symphony of natural beauty.</h2>
            <h3>Vikash</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={asset.thumbnail8} alt="" />
            <h2>The tranquil lake shimmered under the golden sunset, while birdsong filled the air, creating a symphony of natural beauty.</h2>
            <h3>Vikash</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={asset.thumbnail1} alt="" />
            <h2>The tranquil lake shimmered under the golden sunset, while birdsong filled the air, creating a symphony of natural beauty.</h2>
            <h3>Vikash</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={asset.thumbnail2} alt="" />
            <h2>The tranquil lake shimmered under the golden sunset, while birdsong filled the air, creating a symphony of natural beauty.</h2>
            <h3>Vikash</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={asset.thumbnail3} alt="" />
            <h2>The tranquil lake shimmered under the golden sunset, while birdsong filled the air, creating a symphony of natural beauty.</h2>
            <h3>Vikash</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={asset.thumbnail4} alt="" />
            <h2>The tranquil lake shimmered under the golden sunset, while birdsong filled the air, creating a symphony of natural beauty.</h2>
            <h3>Vikash</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={asset.thumbnail5} alt="" />
            <h2>The tranquil lake shimmered under the golden sunset, while birdsong filled the air, creating a symphony of natural beauty.</h2>
            <h3>Vikash</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={asset.thumbnail6} alt="" />
            <h2>The tranquil lake shimmered under the golden sunset, while birdsong filled the air, creating a symphony of natural beauty.</h2>
            <h3>Vikash</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={asset.thumbnail7} alt="" />
            <h2>The tranquil lake shimmered under the golden sunset, while birdsong filled the air, creating a symphony of natural beauty.</h2>
            <h3>Vikash</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src={asset.thumbnail8} alt="" />
            <h2>The tranquil lake shimmered under the golden sunset, while birdsong filled the air, creating a symphony of natural beauty.</h2>
            <h3>Vikash</h3>
            <p>15k views &bull; 2 days ago</p>
        </div> */}
    </div>
  );
};

export default Feed;