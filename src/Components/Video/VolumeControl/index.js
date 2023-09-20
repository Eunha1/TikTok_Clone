import { useRef, forwardRef } from 'react';
import { SoundOffIcon, SoundOnIcon } from '@/components/Icons/icons';
import { HandleVolumeControl } from '../HandleVideo';
function VolumeControl(props, ref) {
   const progressRef = useRef();
   const circleRef = useRef();
   const { videoRef } = props;
   const [circlePosition, scale, isMuted, handleSound] = HandleVolumeControl(videoRef, progressRef, circleRef);
   const classNamesArray = props.className.split(' ');
   const extractedClassNames = classNamesArray.filter((className) => className.trim() !== '');
   const [
      voiceControlContain,
      volumeControlContent,
      volumeControlProgress,
      volumeControlCircle,
      volumeControlBar,
      soundIcon,
   ] = extractedClassNames;
   return (
      <div className={voiceControlContain}>
         <div className={volumeControlContent}>
            <div className={volumeControlProgress} ref={progressRef}></div>
            <div
               className={volumeControlCircle}
               style={{ transform: `translateY(${-circlePosition}px)` }}
               ref={circleRef}
            ></div>
            <div className={volumeControlBar} style={{ transform: `scaleY(${scale})` }}></div>
         </div>
         <div className={soundIcon} onClick={handleSound}>
            {isMuted === false ? <SoundOnIcon /> : <SoundOffIcon />}
         </div>
      </div>
   );
}

export default forwardRef(VolumeControl);
