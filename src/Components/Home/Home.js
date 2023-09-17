import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useState, useEffect } from 'react';
import Image from '@/components/Images';
import Video from '@/components/Video/Video';
import Reaction from './Reaction';
import Info from './Info';
import { Link } from 'react-router-dom';
import { routesConfig } from '@/config';
const cx = classNames.bind(styles);

function Home() {
   const [data, setData] = useState([]);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const result = await fetch(`https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=22`);
            const json = await result.json();
            setData(json.data);
         } catch (error) {
            throw console.error(error);
         }
      };
      fetchData();
   }, []);
   return (
      <div className={cx('wrapper')}>
         {data.map((result) => (
            <div className={cx('container')} key={result.id}>
               <Link to={routesConfig.profileLink(result.user.nickname)}>
                  <Image className={cx('avatar')} src={result.user.avatar} alt=""></Image>
               </Link>
               <div className={cx('main-content')}>
                  <Info data={result} />
                  <div className={cx('video-content')}>
                     <Video
                        src={result.file_url}
                        volumecontrol
                        videocontrol
                        playvideo
                        VideoControlClasses={true}
                        VolumeControlClasses={true}
                        more
                        className={cx('video-main')}
                     />

                     <Reaction data={result} />
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}

export default Home;
