import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { useRef } from 'react';
import { MoreIcon } from '../Icons/icons';
import VolumeControl from './VolumeControl';
import VideoControl from './VideoControl';
import PlayVideo from './PlayVideo';
const cx = classNames.bind(styles);

function Video({
   volumecontrol = false,
   videocontrol = false,
   playvideo = false,
   more = false,
   VideoControlClasses,
   VolumeControlClasses,
   className,
   src,
}) {
   const videoRef = useRef();
   if (VideoControlClasses === true) {
      VideoControlClasses = cx(
         'containerClass',
         'seekBarContainClass',
         'seekBarProgressClass',
         'seekBarCircleClass',
         'seeBarBoldClass',
         'timeContainClass',
      );
   }
   if (VolumeControlClasses === true) {
      VolumeControlClasses = cx(
         'voiceControlContain',
         'volumeControlContent',
         'volumeControlProgress',
         'volumeControlCircle',
         'volumeControlBar',
         'soundIcon',
      );
   }
   return (
      <div className={className}>
         <video ref={videoRef} className={cx('video')} src={src} loop />
         {more && <MoreIcon className={cx('more-icon')} />}
         {playvideo && <PlayVideo videoRef={videoRef} />}
         {videocontrol && <VideoControl videoRef={videoRef} className={VideoControlClasses} />}
         {volumecontrol && <VolumeControl videoRef={videoRef} className={VolumeControlClasses} />}
      </div>
   );
}

export default Video;
