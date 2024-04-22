import './PlayVideo.css'
import { asset } from '../../assets/asset'
import { useEffect, useState } from 'react';
import { API_KEY, value_convert } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const PlayVideo = () => {

    const {videoId} = useParams();

    const [apidata, setApidata] = useState(null)
    const [channeldata, setChanneldata] = useState(null)

    const videodetails = async () => {
        const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(video_url).then(res=> res.json()).then(data=> setApidata(data.items[0]))
    }

    const channeldetails = async () => {
        const channel_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY}`;
        await fetch(channel_url).then(res => res.json()).then(data => setChanneldata(data.items[0]))
    }


    useEffect( () => {
        videodetails();
    },[videoId]);

    useEffect ( () => {
        channeldetails();
    },[apidata]);


    return (
        <div className='play-video'>
            <div className="video">
                <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h3>{apidata?apidata.snippet.title:"Title here"}</h3>
                <div className="play-video-info">
                    <div className='first'>
                        <img src={channeldata?channeldata.snippet.thumbnails.default.url:""} alt="" />
                        <span>
                            <p>{apidata?apidata.snippet.channelTitle:"Title of the video"}</p>
                            <p>{channeldata?value_convert(channeldata.statistics.subscriberCount):"350K"} Subscribers</p>
                        </span>
                        <button> Subscribe </button>
                    </div>
                    <div className='second'>
                        <span><img src={asset.like} alt="" />{apidata?value_convert(apidata.statistics.likeCount):"125K"}</span>
                        <span><img src={asset.dislike} alt="" /></span>
                        <span><img src={asset.share} alt="" />Share</span>
                        <span><img src={asset.save} alt="" />Save</span>
                    </div>
                </div>
                <div className="description">
                    <h2>{apidata?value_convert(apidata.statistics.viewCount):"16K"} views &bull; Premiered {apidata?moment(apidata.snippet.publishedAt).fromNow():"No way"}</h2>
                    <p>{apidata?apidata.snippet.description.slice(0,250):"Sorry to bother you.."}</p>
                </div>
            </div>
        </div>
    );
};

export default PlayVideo;