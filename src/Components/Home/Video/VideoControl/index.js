import classNames from 'classnames/bind';
import styles from './VideoControl.module.scss';
import { forwardRef, useRef, useState, useEffect } from 'react';
const cx = classNames.bind(styles);
function VideoControl(props, ref) {
   const [circlePosition, setCirclePosition] = useState(0);
   const [timeLength, setTimeLength] = useState(0);
   const [currentTime, setCurrentTime] = useState('00:00');
   const seekCircle = useRef();
   const seekProgress = useRef();
   const { videoRef } = props;
   const formatTime = (seconds) => {
      var minutes = Math.floor(seconds / 60);
      var remainingSeconds = Math.floor(seconds % 60);

      var formattedTime =
         (minutes < 10 ? '0' : '') + minutes + ':' + (remainingSeconds < 10 ? '0' : '') + remainingSeconds;
      return formattedTime;
   };
   useEffect(() => {
      const circle = seekCircle.current;
      const progress = seekProgress.current;
      const video = videoRef.current;
      const handleVideoControl = (e) => {
         const Rect = progress.getBoundingClientRect();
         const offsetX = e.clientX - Rect.left;
         const newLeft = Math.min(Math.max(offsetX, 0), 224);
         const newPosition = newLeft / 224;
         setCirclePosition(newPosition * 100);
         const newTime = (newLeft * video.duration) / 224;
         video.currentTime = newTime;
         setCurrentTime(formatTime(newTime));
      };
      video.addEventListener('loadedmetadata', () => {
         const duration = formatTime(video.duration);
         setTimeLength(duration);
      });
      video.addEventListener('timeupdate', () => {
         const currentTime = formatTime(video.currentTime);
         setCurrentTime(currentTime);
         setCirclePosition((1 / video.duration) * video.currentTime * 100);
      });
      circle.addEventListener('mousedown', () => {
         window.addEventListener('mousemove', handleVideoControl);
      });
      window.addEventListener('mouseup', () => {
         window.removeEventListener('mousemove', handleVideoControl);
      });
      return () => {
         circle.removeEventListener('mousedown', () => {
            window.removeEventListener('mousemove', handleVideoControl);
         });
         window.removeEventListener('mouseup', () => {
            window.removeEventListener('mousemove', handleVideoControl);
         });
         video.removeEventListener('loadedmetadata', () => {
            const duration = formatTime(video.duration);
            setTimeLength(duration);
         });
         video.removeEventListener('timeupdate', () => {
            const currentTime = formatTime(video.currentTime);
            setCurrentTime(currentTime);
            setCirclePosition((1 / video.duration) * video.currentTime * 100);
         });
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   return (
      <div className={cx('video-control-contain')}>
         <div className={cx('seek-bar-contain')}>
            <div className={cx('seek-bar-progress')} ref={seekProgress}></div>
            <div className={cx('seek-bar-circle')} style={{ left: `calc(${circlePosition}%)` }} ref={seekCircle}></div>
            <div
               className={cx('seek-bar-bold')}
               style={{ transform: `scaleX(${circlePosition / 100}) translateY(-50%)` }}
            ></div>
         </div>
         <div className={cx('time-contain')}>
            {currentTime}/{timeLength}
         </div>
      </div>
   );
}

export default forwardRef(VideoControl);
