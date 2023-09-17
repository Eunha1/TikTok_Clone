import { useState, useEffect } from 'react';
function VideoList(param) {
   const [videoList, setVideoList] = useState([]);
   const videoIDList = [];
   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(`https://tiktok.fullstack.edu.vn/api/users/@${param.nickname}`);
            const json = await res.json();
            setVideoList(json.data.videos);
         } catch (error) {
            throw console.error(error);
         }
      };
      fetchData();
   }, [param.nickname]);
   videoList.map((result) => videoIDList.push(result.uuid));
   return videoIDList;
}

export default VideoList;
