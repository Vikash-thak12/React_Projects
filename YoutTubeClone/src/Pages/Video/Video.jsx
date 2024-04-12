import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommend from '../../Recommend/Recommend';
import './Video.css'


const Video = () => {
  return (
    <div className='play-container'>
      <PlayVideo />
      <Recommend />
    </div>
  );
};

export default Video;