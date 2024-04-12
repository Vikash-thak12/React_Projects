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
                <div className="description">
                    <h2>25,344 views <span>Premiered 19 hours ago</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, temporibus! Sequi totam dolorum saepe, quos quis cumque alias non ad consequuntur vel dolores ducimus harum vero distinctio ipsum, aliquam obcaecati.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis exercitationem error, porro quo voluptate pariatur unde quaerat alias aperiam autem, placeat ratione. Quod ad repellendus dignissimos similique nisi commodi quis.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PlayVideo;