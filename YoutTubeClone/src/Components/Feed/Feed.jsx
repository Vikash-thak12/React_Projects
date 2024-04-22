import './Feed.css'
import { asset } from '../../assets/asset'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_KEY, value_convert } from '../../data';
import moment from 'moment';

const Feed = ({ category }) => {
    const [data, setData] = useState([]);

    const fetchdata = async () => {
        // const videolist_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=100&regionCode=us&videoCategoryId=${category}&key=${API_KEY}`;

        const videolist_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=in&videoCategoryId=${category}&key=${API_KEY}`;

        await fetch(videolist_url).then(response => response.json()).then(data => setData(data.items))
    }

    useEffect(() => {
        fetchdata();
    }, [category])



    return (
        <div className="feed">

            {data.map((item, index) => {
                return (
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{value_convert(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()} </p>
                    </Link>
                )
            })}


        </div>
    );
};

export default Feed;