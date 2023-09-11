import classNames from 'classnames/bind';
import styles from './PlayVideo.module.scss';
import { useState, forwardRef } from 'react';
import { PauseIcon, PlayIcon } from '@/components/Icons/icons';
const cx = classNames.bind(styles);
function PlayVideo(props, ref) {
   const [isPlay, setIsPlay] = useState(false);
   const { videoRef } = props;
   const handlePlay = () => {
      if (isPlay) {
         videoRef.current.pause();
      } else {
         videoRef.current.play();
      }
      setIsPlay(!isPlay);
   };
   return (
      <div className={cx('play-icon-contain')} onClick={handlePlay}>
         {isPlay === false ? <PauseIcon /> : <PlayIcon />}
      </div>
   );
}
export default forwardRef(PlayVideo);
