import classNames from 'classnames/bind';
import styles from './VolumeControl.module.scss';
import { useRef, useEffect, useState, forwardRef } from 'react';
import { SoundOffIcon, SoundOnIcon } from '@/components/Icons/icons';
const cx = classNames.bind(styles);
function VolumeControl(props, ref) {
   const [circlePosition, setCirclePosition] = useState(40);
   const [isMuted, setIsMuted] = useState(false);
   const [scale, setScale] = useState(1);
   const progressRef = useRef();
   const circleRef = useRef();
   const { videoRef } = props;

   useEffect(() => {
      const progress = progressRef.current;
      const circle = circleRef.current;
      const handleVolume = (e) => {
         const Rect = progress.getBoundingClientRect();
         const offsetY = Rect.bottom - e.clientY;
         const maxTop = 40;
         const newTop = Math.min(Math.max(offsetY, 0), maxTop);
         setCirclePosition(newTop);
         const newScale = newTop / maxTop;
         setScale(newScale);
         videoRef.current.volume = newScale;
         if (newScale === 0) {
            setIsMuted(true);
         } else {
            setIsMuted(false);
         }
      };

      circle.addEventListener('mousedown', () => {
         window.addEventListener('mousemove', handleVolume);
      });

      window.addEventListener('mouseup', () => {
         window.removeEventListener('mousemove', handleVolume);
      });
      return () => {
         circle.removeEventListener('mousedown', () => {
            window.removeEventListener('mousemove', handleVolume);
         });
         window.removeEventListener('mouseup', () => {
            window.removeEventListener('mousemove', handleVolume);
         });
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   const handleSound = () => {
      if (!isMuted) {
         videoRef.current.volume = 0;
         setScale(0);
         setCirclePosition(0);
      } else {
         videoRef.current.volume = 0.5;
         setScale(0.5);
         setCirclePosition(20);
      }
      setIsMuted(!isMuted);
   };
   return (
      <div className={cx('voice-control-contain')}>
         <div className={cx('volume-control-content')}>
            <div className={cx('volume-control-progress')} ref={progressRef}></div>
            <div
               className={cx('volume-control-circle')}
               style={{ transform: `translateY(${-circlePosition}px)` }}
               ref={circleRef}
            ></div>
            <div className={cx('volume-control-bar')} style={{ transform: `scaleY(${scale})` }}></div>
         </div>
         <div className={cx('sound-icon')} onClick={handleSound}>
            {isMuted === false ? <SoundOnIcon /> : <SoundOffIcon />}
         </div>
      </div>
   );
}

export default forwardRef(VolumeControl);
