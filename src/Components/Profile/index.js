import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import Image from '../Images';
import { BlackMoreIcon, FollowingIcon, LockIcon, SecondPauseIcon, WhiteShareIcon } from '@/components/Icons/icons';
import SummerRain from '@/Video/SummerRain.mp4';
import { Link } from 'react-router-dom';
import Video from '@/components/Video/Video';
const cx = classNames.bind(styles);

function Profile() {
   return (
      <div className={cx('profile-container')}>
         <div className={cx('profile-content')}>
            <div className={cx('profile-header')}>
               <div className={cx('profile-info')}>
                  <div className={cx('info-avatar')}>
                     <Image
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/45b329dac673c061b6e43a6cfaa3487a.jpeg?x-expires=1694397600&x-signature=1yIeYT966jnkqV2DuJkYxwypzwg%3D"
                        className={cx('avatar')}
                     />
                  </div>
                  <div className={cx('title-container')}>
                     <h1 className={cx('nickname')}>
                        GFriend Offical
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                     </h1>
                     <h2 className={cx('name')}>Gfriend</h2>
                     <div className={cx('button-content')}>
                        <Button outline large className={cx('button')}>
                           Message
                        </Button>
                        <div className={cx('icon')}>
                           <FollowingIcon />
                        </div>
                     </div>
                  </div>
               </div>
               <h3 className={cx('count-info')}>
                  <div className={cx('status')}>
                     <strong style={{ fontWeight: 700 }}>1234</strong>
                     <span className={cx('status-title')}>Following</span>
                  </div>
                  <div className={cx('status')}>
                     <strong style={{ fontWeight: 700 }}>1234</strong>
                     <span className={cx('status-title')}>Follower</span>
                  </div>
                  <div className={cx('status')}>
                     <strong style={{ fontWeight: 700 }}>1234</strong>
                     <span className={cx('status-title')}>likes</span>
                  </div>
               </h3>
               <h2 className={cx('info-description')}>여자친구 GFRIEND 공식 채널</h2>
               <div className={cx('action-container')}>
                  <WhiteShareIcon />
                  <BlackMoreIcon />
               </div>
            </div>
            <div className={cx('profile-layout-main')}>
               <div className={cx('layout-title')}>
                  <p className={cx('title-video')}>Videos</p>
                  <p className={cx('title-liked')}>
                     <LockIcon />
                     <span style={{ marginLeft: '8px' }}>Liked</span>
                  </p>
                  <div className={cx('bottom-line')}></div>
               </div>
               <div style={{ width: '100%' }}>
                  <div className={cx('video-item-list')}>
                     <div className={cx('video-item')}>
                        <Link to="/upload">
                           <div className={cx('video-thumbnail')}>
                              <Image
                                 src="https://files.fullstack.edu.vn/f8-tiktok/videos/834-6371c6436f86b.jpg"
                                 className={cx('image')}
                              />
                              <Video className={cx('video-content')} src={SummerRain} />
                           </div>
                           <div className={cx('video-views')}>
                              <SecondPauseIcon />
                              <strong className={cx('views')}>1.3M</strong>
                           </div>
                        </Link>
                        <div className={cx('video-label')}>
                           <div className={cx('video-hastag')}>
                              <span style={{ display: 'inline-block', color: 'rgba(43, 93, 185, 1)' }}>#Gfriend</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Profile;
