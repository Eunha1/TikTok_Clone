import classNames from 'classnames/bind';
import styles from './Video.module.scss';

import { useState, useRef } from 'react';
import { MoreIcon, PauseIcon, PlayIcon } from '@/components/Icons/icons';
import VolumeControl from './VolumeControl';
import VideoControl from './VideoControl';
const cx = classNames.bind(styles);
function Video_2({ src }) {
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
         <video ref={videoRef} src={src} className={cx('video')} loop />
         <MoreIcon className={cx('more-icon')} />
         <div className={cx('play-icon-contain')} onClick={handlePlay}>
            {isPlay === false ? <PauseIcon /> : <PlayIcon />}
         </div>
         <VolumeControl videoRef={videoRef} />
         <VideoControl videoRef={videoRef} />
      </div>
   );
}

export default Video_2;
