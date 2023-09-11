import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { useRef } from 'react';
import { MoreIcon } from '../Icons/icons';
import VolumeControl from './VolumeControl';
import VideoControl from './VideoControl';
import PlayVideo from './PlayVideo';
const cx = classNames.bind(styles);

function Video({ volumecontrol = false, videocontrol = false, playvideo = false, more = false, className, src }) {
   const videoRef = useRef();

   return (
      <div className={className}>
         <video ref={videoRef} className={cx('video')} src={src} />
         {more && <MoreIcon className={cx('more-icon')} />}
         {playvideo && <PlayVideo videoRef={videoRef} />}
         {videocontrol && <VideoControl videoRef={videoRef} />}
         {volumecontrol && <VolumeControl videoRef={videoRef} />}
      </div>
   );
}

export default Video;
