import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { routesConfig } from '@/config';
import { useState, useEffect } from 'react';
import Video from '@/components/Video/Video';
import Search from './Search';
import Image from '../Images';
import Profile from './Profile';
import CommnentList from './CommentList';
import { CloseIcon, PreviousIcon, ShareMoreArrow } from '../Icons/icons';
import PostComment from './PostComment';
import VideoList from '@/Service/UserVideoList';
const cx = classNames.bind(styles);
function Comment() {
   const navigate = useNavigate();
   const param = useParams();
   const [data, setData] = useState({});
   const [videoId, setVideoId] = useState(param.videoid);
   const [count, setCount] = useState(-1);
   const videoIDList = VideoList(param);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const result = await fetch(`https://tiktok.fullstack.edu.vn/api/videos/${videoId}`);
            const json = await result.json();
            setData(json.data);
         } catch (error) {
            throw console.error(error);
         }
      };
      fetchData();
   }, [videoId]);

   const handleNextVideo = () => {
      if (count < videoIDList.length - 1) {
         setCount((prev) => prev + 1);
         setVideoId(videoIDList[count + 1]);
         navigate(`/${param.nickname}/video/${videoIDList[count + 1]}`);
      }
   };
   const handlePreviousVideo = () => {
      setCount((prev) => prev - 1);
      setVideoId(videoIDList[count - 1]);
      navigate(`/${param.nickname}/video/${videoIDList[count - 1]}`);
   };
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
            {count > 0 && (
               <button className={cx('previous-content')} onClick={handlePreviousVideo}>
                  <PreviousIcon />
               </button>
            )}
            {count !== videoIDList.length - 1 && (
               <button className={cx('more-content')} onClick={handleNextVideo}>
                  <ShareMoreArrow fill="rgb(255,255,255)" />
               </button>
            )}
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
