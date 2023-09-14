import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import Video from '@/components/Video/Video';
import SummerRain from '@/Video/SummerRain.mp4';
import Search from './Search';
import Image from '../Images';
import Profile from './Profile';
import CommnentList from './CommentList';
import { CloseIcon } from '../Icons/icons';
import { Link } from 'react-router-dom';
import { routesConfig } from '@/config';
import PostComment from './PostComment';
const cx = classNames.bind(styles);
function Comment() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('video-container')}>
            <div className={cx('header-comment')}>
               <Search />
            </div>
            <div className={cx('video-background')}>
               <Image
                  src="https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/c599d52f8a9b4044aebccab0f482eada_1694011966?x-expires=1694790000&x-signature=r9Zpy%2BFeJnpLuZyI4q7sYb3ihhc%3D"
                  className={cx('image')}
               />
            </div>
            <Link to={routesConfig.home} className={cx('close-icon')}>
               <CloseIcon fill="#fff" />
            </Link>
            <Video
               className={cx('video-content')}
               volumecontrol
               videocontrol
               playvideo
               src={SummerRain}
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
                  <Profile />
                  <CommnentList />
               </div>
            </div>
            <PostComment />
         </div>
      </div>
   );
}

export default Comment;
