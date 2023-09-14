import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Button from '../Button';
import Image from '../Images';
import { BlackMoreIcon, FollowingIcon, LockIcon, SecondPauseIcon, WhiteShareIcon } from '@/components/Icons/icons';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Video from '@/components/Video/Video';
const cx = classNames.bind(styles);

function Profile() {
   const { nickname } = useParams();
   const [data, setData] = useState({});
   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(`https://tiktok.fullstack.edu.vn/api/users/@${nickname}`);
            const json = await res.json();
            setData(json.data);
         } catch (error) {
            console.error(error);
         }
      };

      fetchData();
   }, [nickname]);
   return (
      <div className={cx('profile-container')}>
         <div className={cx('profile-content')}>
            <div className={cx('profile-header')}>
               <div className={cx('profile-info')}>
                  <div className={cx('info-avatar')}>
                     <Image src={data?.avatar} className={cx('avatar')} />
                  </div>
                  <div className={cx('title-container')}>
                     <h1 className={cx('nickname')}>
                        {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />}
                     </h1>
                     <h2 className={cx('name')}>{data.nickname}</h2>
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
                     <strong style={{ fontWeight: 700 }}>{data.followings_count}</strong>
                     <span className={cx('status-title')}>Following</span>
                  </div>
                  <div className={cx('status')}>
                     <strong style={{ fontWeight: 700 }}>{data.followers_count}</strong>
                     <span className={cx('status-title')}>Follower</span>
                  </div>
                  <div className={cx('status')}>
                     <strong style={{ fontWeight: 700 }}>{data.likes_count}</strong>
                     <span className={cx('status-title')}>likes</span>
                  </div>
               </h3>
               <h2 className={cx('info-description')}>{data.bio}</h2>
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
                     {data?.videos?.map((result) => (
                        <div className={cx('video-item')} key={result.id}>
                           <Link to="/upload">
                              <div className={cx('video-thumbnail')}>
                                 <Image className={cx('image')} src={result.thumb_url} />
                                 <Video className={cx('video-content')} src={result.file_url} />
                              </div>
                              <div className={cx('video-views')}>
                                 <SecondPauseIcon />
                                 <strong className={cx('views')}>1.3M</strong>
                              </div>
                           </Link>
                           <div className={cx('video-label')}>
                              <div className={cx('video-hastag')}>
                                 <span style={{ display: 'inline-block', color: 'rgba(43, 93, 185, 1)' }}>
                                    {result.description}
                                 </span>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Profile;
