import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { useState, useRef } from 'react';

import { MoreIcon, PlayIcon, PauseIcon } from '../Icons/icons';
const cx = classNames.bind(styles);

function Video({ src, volumeControl, videoControl, Pause, Play, More, className }) {
   const [isPlay, setIsPlay] = useState(false);
   const videoRef = useRef();
   const handlePlay = () => {
      if (isPlay) {
         videoRef.current.pause();
      } else {
         videoRef.current.play();
      }
      setIsPlay(!isPlay);
   };
   return (
      <div className={cx('video-main')}>
         <video ref={videoRef} className={cx('video')} src={src} />
         <MoreIcon className={cx('more-icon')} />
         <div className={cx('play-icon-contain')} onClick={handlePlay}>
            {isPlay === false ? <PauseIcon /> : <PlayIcon />}
         </div>
      </div>
   );
}

export default Video;
