import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import { Link, useParams } from 'react-router-dom';
import { routesConfig } from '@/config';
import { useState, useEffect } from 'react';
import Video from '@/components/Video/Video';
import Search from './Search';
import Image from '../Images';
import Profile from './Profile';
import CommnentList from './CommentList';
import { CloseIcon, ShareMoreArrow } from '../Icons/icons';
import PostComment from './PostComment';
const cx = classNames.bind(styles);
function Comment() {
   const param = useParams();
   const [data, setData] = useState({});
   useEffect(() => {
      const fetchData = async () => {
         try {
            const result = await fetch(`https://tiktok.fullstack.edu.vn/api/videos/${param.videoid}`);
            const json = await result.json();
            setData(json.data);
         } catch (error) {
            throw console.error(error);
         }
      };
      fetchData();
   }, [param.videoid]);
   return (
      <div className={cx('wrapper')}>
         <div className={cx('video-container')}>
            <div className={cx('header-comment')}>
               <Search />
            </div>
            <div className={cx('video-background')}>
               <Image src={data.thumb_url} className={cx('image')} />
            </div>
            <Link to={routesConfig.home} className={cx('close-icon')}>
               <CloseIcon fill="#fff" />
            </Link>
            <button className={cx('more-content')}>
               <ShareMoreArrow fill="rgb(255,255,255)" />
            </button>
            <Video
               className={cx('video-content')}
               volumecontrol
               videocontrol
               playvideo
               src={data.file_url}
               VideoControlClasses={cx(
                  'containerClass',
                  'seekBarContainClass',
                  'seekBarProgressClass',
                  'seekBarCircleClass',
                  'seeBarBoldClass',
                  'timeContainClass',
               )}
               VolumeControlClasses={cx(
                  'voiceControlContain',
                  'volumeControlContent',
                  'volumeControlProgress',
                  'volumeControlCircle',
                  'volumeControlBar',
                  'soundIcon',
               )}
            />
         </div>
         <div className={cx('commentList-wrapper')}>
            <div className={cx('commentList-container')}>
               <div className={cx('commentList-content')}>
                  <Profile data={data} />
                  <CommnentList />
               </div>
            </div>
            <PostComment />
         </div>
      </div>
   );
}

export default Comment;
