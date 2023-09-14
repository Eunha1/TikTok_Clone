import { forwardRef, useRef } from 'react';
import { useVideoControl } from '@/hooks';
function VideoControl(props, ref) {
   const seekCircle = useRef();
   const seekProgress = useRef();
   const { videoRef } = props;
   const [circlePosition, timeLength, currentTime] = useVideoControl(videoRef, seekCircle, seekProgress);
   const classNamesArray = props.className.split(' ');
   const extractedClassNames = classNamesArray.filter((className) => className.trim() !== '');
   const [
      containerClass,
      seekBarContainClass,
      seekBarProgressClass,
      seekBarCircleClass,
      seekBarBoldClass,
      timeContainClass,
   ] = extractedClassNames;
   return (
      <div className={containerClass}>
         <div className={seekBarContainClass}>
            <div className={seekBarProgressClass} ref={seekProgress}></div>
            <div className={seekBarCircleClass} style={{ left: `calc(${circlePosition}%)` }} ref={seekCircle}></div>
            <div
               className={seekBarBoldClass}
               style={{ transform: `scaleX(${circlePosition / 100}) translateY(-50%)` }}
            ></div>
         </div>
         <div className={timeContainClass}>
            {currentTime}/{timeLength}
         </div>
      </div>
   );
}

export default forwardRef(VideoControl);
