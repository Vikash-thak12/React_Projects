import { useEffect, useState } from 'react';
import { asset } from '../assets/asset';
import './Recommend.css'
import { API_KEY, value_convert } from '../data';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Recommend = ({ categoryId }) => {
    const [apidata, setApidata] = useState([])

    const recodata = async () => {
        const recommend_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=in&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(recommend_url).then(res => res.json()).then(data => setApidata(data.items));
    }

    useEffect(() => {
        recodata();
    }, [])


    return (
        <div className='recommend'>
            {apidata.map((item, index) => {
                return (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className="video-info">
                            <h5>{item.snippet.title}</h5>
                            <div className="small-info">
                                <p>{item.snippet.channelTitle}</p>
                                <p>{value_convert(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()} </p>
                            </div>
                        </div>
                    </Link>
                )
            })}
            {/* <div className="side-video-list">
            <img src={asset.thumbnail1} alt="" />
            <div className="video-info">
                <h5>This is vikash thakur biography and here you will get to know about all of my experiences throughout my life
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ex nobis quasi tempora, praesentium doloribus, necessitatibus voluptatem omnis aliquam minima sunt hic ipsa. Voluptates, odio repellendus deleniti tempora eligendi laboriosam.
                </h5>
                <div className="small-info">
                    <p>Vikash Thakur</p>
                    <p>2k views &bull; <span>7 days ago</span></p>
                </div>
            </div>
        </div>
        <div className="side-video-list">
            <img src={asset.thumbnail2} alt="" />
            <div className="video-info">
                <h5>This is vikash thakur biography and here you will get to know about all of my experiences throughout my life
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ex nobis quasi tempora, praesentium doloribus, necessitatibus voluptatem omnis aliquam minima sunt hic ipsa. Voluptates, odio repellendus deleniti tempora eligendi laboriosam.
                </h5>
                <div className="small-info">
                    <p>Vikash Thakur</p>
                    <p>2k views &bull; <span>7 days ago</span></p>
                </div>
            </div>
        </div>
        <div className="side-video-list">
            <img src={asset.thumbnail3} alt="" />
            <div className="video-info">
                <h5>This is vikash thakur biography and here you will get to know about all of my experiences throughout my life
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ex nobis quasi tempora, praesentium doloribus, necessitatibus voluptatem omnis aliquam minima sunt hic ipsa. Voluptates, odio repellendus deleniti tempora eligendi laboriosam.
                </h5>
                <div className="small-info">
                    <p>Vikash Thakur</p>
                    <p>2k views &bull; <span>7 days ago</span></p>
                </div>
            </div>
        </div>
        <div className="side-video-list">
            <img src={asset.thumbnail5} alt="" />
            <div className="video-info">
                <h5>This is vikash thakur biography and here you will get to know about all of my experiences throughout my life
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ex nobis quasi tempora, praesentium doloribus, necessitatibus voluptatem omnis aliquam minima sunt hic ipsa. Voluptates, odio repellendus deleniti tempora eligendi laboriosam.
                </h5>
                <div className="small-info">
                    <p>Vikash Thakur</p>
                    <p>2k views &bull; <span>7 days ago</span></p>
                </div>
            </div>
        </div>
        <div className="side-video-list">
            <img src={asset.thumbnail6} alt="" />
            <div className="video-info">
                <h5>This is vikash thakur biography and here you will get to know about all of my experiences throughout my life
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ex nobis quasi tempora, praesentium doloribus, necessitatibus voluptatem omnis aliquam minima sunt hic ipsa. Voluptates, odio repellendus deleniti tempora eligendi laboriosam.
                </h5>
                <div className="small-info">
                    <p>Vikash Thakur</p>
                    <p>2k views &bull; <span>7 days ago</span></p>
                </div>
            </div>
        </div>
        <div className="side-video-list">
            <img src={asset.thumbnail7} alt="" />
            <div className="video-info">
                <h5>This is vikash thakur biography and here you will get to know about all of my experiences throughout my life
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ex nobis quasi tempora, praesentium doloribus, necessitatibus voluptatem omnis aliquam minima sunt hic ipsa. Voluptates, odio repellendus deleniti tempora eligendi laboriosam.
                </h5>
                <div className="small-info">
                    <p>Vikash Thakur</p>
                    <p>2k views &bull; <span>7 days ago</span></p>
                </div>
            </div>
        </div>
        <div className="side-video-list">
            <img src={asset.thumbnail8} alt="" />
            <div className="video-info">
                <h5>This is vikash thakur biography and here you will get to know about all of my experiences throughout my life
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ex nobis quasi tempora, praesentium doloribus, necessitatibus voluptatem omnis aliquam minima sunt hic ipsa. Voluptates, odio repellendus deleniti tempora eligendi laboriosam.
                </h5>
                <div className="small-info">
                    <p>Vikash Thakur</p>
                    <p>2k views &bull; <span>7 days ago</span></p>
                </div>
            </div>
        </div> */}

        </div>
    );
};

export default Recommend;