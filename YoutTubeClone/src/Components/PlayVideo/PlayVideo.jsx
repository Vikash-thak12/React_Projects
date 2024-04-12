import './PlayVideo.css'
import { asset } from '../../assets/asset'

const PlayVideo = () => {
    return (
        <div className='play-video'>
            <div className="video">
                <video src={asset.video} controls autoPlay ></video>
                <h3>Romantic video for betterment..</h3>
                <div className="play-video-info">
                    <div className='first'>
                        <img src={asset.jack} alt="" />
                        {/* <div>
                            <h2>Vikash</h2>
                            <h3>2k subscribers</h3>
                        </div> */}
                        <span>
                            <p>Vikash</p>
                            <p>2k subscribers</p>
                        </span>
                        <button> Subscribe </button>
                    </div>
                    <div className='second'>
                        <span><img src={asset.like} alt="" />Like</span>
                        <span><img src={asset.dislike} alt="" />Dislike</span>
                        <span><img src={asset.share} alt="" />Share</span>
                        <span><img src={asset.save} alt="" />Save</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayVideo;