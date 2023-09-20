import { useState, useEffect } from 'react';
function useVolumeControl(videoRef, progressRef, circleRef) {
   const [circlePosition, setCirclePosition] = useState(40);
   const [isMuted, setIsMuted] = useState(false);
   const [scale, setScale] = useState(1);
   useEffect(() => {
      const progress = progressRef.current;
      const circle = circleRef.current;
      const handleVolume = (e) => {
         const Rect = progress.getBoundingClientRect();
         const offsetY = Rect.bottom - e.clientY;
         const maxTop = Rect.height - 8;
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
   return [circlePosition, scale, isMuted, handleSound];
}
export default useVolumeControl;
