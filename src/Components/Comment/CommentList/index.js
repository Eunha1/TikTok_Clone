import classNames from 'classnames/bind';
import styles from './CommentList.module.scss';
import Image from '@/components/Images';
import { Link } from 'react-router-dom';
import { HeartIcon, ShareMoreArrow } from '@/components/Icons/icons';
const cx = classNames.bind(styles);

function CommnentList() {
   return (
      <div>
         <div className={cx('tabMenu-container')}>
            <div className={cx('tabMenu-content')}>
               <div className={cx('tabItem-content-1')}>
                  <div className={cx('tabItem')}>Comment (501)</div>
               </div>
               <div className={cx('tabItem-content-2')}>
                  <div className={cx('tabItem')}>Creator videos</div>
               </div>
            </div>
         </div>
         <div style={{ marginBottom: '20px' }}>
            <div className={cx('comment-container')}>
               <Link className={cx('image-link')}>
                  <Image
                     src="https://i.pinimg.com/originals/23/e9/4f/23e94f99116b0d9900eacc913f7d0742.jpg"
                     className={cx('image')}
                  />
               </Link>
               <div style={{ flex: '1 1 auto' }}>
                  <Link className={cx('nickname')}>do quang phuc</Link>
                  <p className={cx('comment-text')}>this song is masterpiece</p>
                  <div className={cx('comment-sub-content')}>
                     <span className={cx('comment-time')}>09-14</span>
                     <span className={cx('comment-reply')}>Reply</span>
                  </div>
               </div>
               <div className={cx('active-container')}>
                  <div className={cx('heart-icon')}>
                     <HeartIcon width="2rem" height="2rem" />
                     <span className={cx('heart-count')}>1234</span>
                  </div>
               </div>
            </div>
            <div style={{ paddingLeft: '52px' }}>
               <div className={cx('reply-container')}>
                  <p className={cx('view-more')}>
                     View 4 replies
                     <ShareMoreArrow width="1.4rem" height="1.4rem" className={cx('icon')} />
                  </p>
               </div>
            </div>
         </div>
         <div style={{ marginBottom: '20px' }}>
            <div className={cx('comment-container')}>
               <Link className={cx('image-link')}>
                  <Image
                     src="https://i.pinimg.com/originals/23/e9/4f/23e94f99116b0d9900eacc913f7d0742.jpg"
                     className={cx('image')}
                  />
               </Link>
               <div style={{ flex: '1 1 auto' }}>
                  <Link className={cx('nickname')}>do quang phuc</Link>
                  <p className={cx('comment-text')}>this song is masterpiece</p>
                  <div className={cx('comment-sub-content')}>
                     <span className={cx('comment-time')}>09-14</span>
                     <span className={cx('comment-reply')}>Reply</span>
                  </div>
               </div>
               <div className={cx('active-container')}>
                  <div className={cx('heart-icon')}>
                     <HeartIcon width="2rem" height="2rem" />
                     <span className={cx('heart-count')}>1234</span>
                  </div>
               </div>
            </div>
            <div style={{ paddingLeft: '52px' }}>
               <div className={cx('reply-container')}>
                  <p className={cx('view-more')}>
                     View 4 replies
                     <ShareMoreArrow width="1.4rem" height="1.4rem" className={cx('icon')} />
                  </p>
               </div>
            </div>
         </div>
         <div style={{ marginBottom: '20px' }}>
            <div className={cx('comment-container')}>
               <Link className={cx('image-link')}>
                  <Image
                     src="https://i.pinimg.com/originals/23/e9/4f/23e94f99116b0d9900eacc913f7d0742.jpg"
                     className={cx('image')}
                  />
               </Link>
               <div style={{ flex: '1 1 auto' }}>
                  <Link className={cx('nickname')}>do quang phuc</Link>
                  <p className={cx('comment-text')}>this song is masterpiece</p>
                  <div className={cx('comment-sub-content')}>
                     <span className={cx('comment-time')}>09-14</span>
                     <span className={cx('comment-reply')}>Reply</span>
                  </div>
               </div>
               <div className={cx('active-container')}>
                  <div className={cx('heart-icon')}>
                     <HeartIcon width="2rem" height="2rem" />
                     <span className={cx('heart-count')}>1234</span>
                  </div>
               </div>
            </div>
            <div style={{ paddingLeft: '52px' }}>
               <div className={cx('reply-container')}>
                  <p className={cx('view-more')}>
                     View 4 replies
                     <ShareMoreArrow width="1.4rem" height="1.4rem" className={cx('icon')} />
                  </p>
               </div>
            </div>
         </div>
         <div style={{ marginBottom: '20px' }}>
            <div className={cx('comment-container')}>
               <Link className={cx('image-link')}>
                  <Image
                     src="https://i.pinimg.com/originals/23/e9/4f/23e94f99116b0d9900eacc913f7d0742.jpg"
                     className={cx('image')}
                  />
               </Link>
               <div style={{ flex: '1 1 auto' }}>
                  <Link className={cx('nickname')}>do quang phuc</Link>
                  <p className={cx('comment-text')}>this song is masterpiece</p>
                  <div className={cx('comment-sub-content')}>
                     <span className={cx('comment-time')}>09-14</span>
                     <span className={cx('comment-reply')}>Reply</span>
                  </div>
               </div>
               <div className={cx('active-container')}>
                  <div className={cx('heart-icon')}>
                     <HeartIcon width="2rem" height="2rem" />
                     <span className={cx('heart-count')}>1234</span>
                  </div>
               </div>
            </div>
            <div style={{ paddingLeft: '52px' }}>
               <div className={cx('reply-container')}>
                  <p className={cx('view-more')}>
                     View 4 replies
                     <ShareMoreArrow width="1.4rem" height="1.4rem" className={cx('icon')} />
                  </p>
               </div>
            </div>
         </div>
         <div style={{ marginBottom: '20px' }}>
            <div className={cx('comment-container')}>
               <Link className={cx('image-link')}>
                  <Image
                     src="https://i.pinimg.com/originals/23/e9/4f/23e94f99116b0d9900eacc913f7d0742.jpg"
                     className={cx('image')}
                  />
               </Link>
               <div style={{ flex: '1 1 auto' }}>
                  <Link className={cx('nickname')}>do quang phuc</Link>
                  <p className={cx('comment-text')}>this song is masterpiece</p>
                  <div className={cx('comment-sub-content')}>
                     <span className={cx('comment-time')}>09-14</span>
                     <span className={cx('comment-reply')}>Reply</span>
                  </div>
               </div>
               <div className={cx('active-container')}>
                  <div className={cx('heart-icon')}>
                     <HeartIcon width="2rem" height="2rem" />
                     <span className={cx('heart-count')}>1234</span>
                  </div>
               </div>
            </div>
            <div style={{ paddingLeft: '52px' }}>
               <div className={cx('reply-container')}>
                  <p className={cx('view-more')}>
                     View 4 replies
                     <ShareMoreArrow width="1.4rem" height="1.4rem" className={cx('icon')} />
                  </p>
               </div>
            </div>
         </div>
         <div style={{ marginBottom: '20px' }}>
            <div className={cx('comment-container')}>
               <Link className={cx('image-link')}>
                  <Image
                     src="https://i.pinimg.com/originals/23/e9/4f/23e94f99116b0d9900eacc913f7d0742.jpg"
                     className={cx('image')}
                  />
               </Link>
               <div style={{ flex: '1 1 auto' }}>
                  <Link className={cx('nickname')}>do quang phuc</Link>
                  <p className={cx('comment-text')}>this song is masterpiece</p>
                  <div className={cx('comment-sub-content')}>
                     <span className={cx('comment-time')}>09-14</span>
                     <span className={cx('comment-reply')}>Reply</span>
                  </div>
               </div>
               <div className={cx('active-container')}>
                  <div className={cx('heart-icon')}>
                     <HeartIcon width="2rem" height="2rem" />
                     <span className={cx('heart-count')}>1234</span>
                  </div>
               </div>
            </div>
            <div style={{ paddingLeft: '52px' }}>
               <div className={cx('reply-container')}>
                  <p className={cx('view-more')}>
                     View 4 replies
                     <ShareMoreArrow width="1.4rem" height="1.4rem" className={cx('icon')} />
                  </p>
               </div>
            </div>
         </div>
         <div style={{ marginBottom: '20px' }}>
            <div className={cx('comment-container')}>
               <Link className={cx('image-link')}>
                  <Image
                     src="https://i.pinimg.com/originals/23/e9/4f/23e94f99116b0d9900eacc913f7d0742.jpg"
                     className={cx('image')}
                  />
               </Link>
               <div style={{ flex: '1 1 auto' }}>
                  <Link className={cx('nickname')}>do quang phuc</Link>
                  <p className={cx('comment-text')}>this song is masterpiece</p>
                  <div className={cx('comment-sub-content')}>
                     <span className={cx('comment-time')}>09-14</span>
                     <span className={cx('comment-reply')}>Reply</span>
                  </div>
               </div>
               <div className={cx('active-container')}>
                  <div className={cx('heart-icon')}>
                     <HeartIcon width="2rem" height="2rem" />
                     <span className={cx('heart-count')}>1234</span>
                  </div>
               </div>
            </div>
            <div style={{ paddingLeft: '52px' }}>
               <div className={cx('reply-container')}>
                  <p className={cx('view-more')}>
                     View 4 replies
                     <ShareMoreArrow width="1.4rem" height="1.4rem" className={cx('icon')} />
                  </p>
               </div>
            </div>
         </div>
         valid{' '}
         <div style={{ marginBottom: '20px' }}>
            <div className={cx('comment-container')}>
               <Link className={cx('image-link')}>
                  <Image
                     src="https://i.pinimg.com/originals/23/e9/4f/23e94f99116b0d9900eacc913f7d0742.jpg"
                     className={cx('image')}
                  />
               </Link>
               <div style={{ flex: '1 1 auto' }}>
                  <Link className={cx('nickname')}>do quang phuc</Link>
                  <p className={cx('comment-text')}>this song is masterpiece</p>
                  <div className={cx('comment-sub-content')}>
                     <span className={cx('comment-time')}>09-14</span>
                     <span className={cx('comment-reply')}>Reply</span>
                  </div>
               </div>
               <div className={cx('active-container')}>
                  <div className={cx('heart-icon')}>
                     <HeartIcon width="2rem" height="2rem" />
                     <span className={cx('heart-count')}>1234</span>
                  </div>
               </div>
            </div>
            <div style={{ paddingLeft: '52px' }}>
               <div className={cx('reply-container')}>
                  <p className={cx('view-more')}>
                     View 4 replies
                     <ShareMoreArrow width="1.4rem" height="1.4rem" className={cx('icon')} />
                  </p>
               </div>
            </div>
         </div>
         <div style={{ marginBottom: '20px' }}>
            <div className={cx('comment-container')}>
               <Link className={cx('image-link')}>
                  <Image
                     src="https://i.pinimg.com/originals/23/e9/4f/23e94f99116b0d9900eacc913f7d0742.jpg"
                     className={cx('image')}
                  />
               </Link>
               <div style={{ flex: '1 1 auto' }}>
                  <Link className={cx('nickname')}>do quang phuc</Link>
                  <p className={cx('comment-text')}>this song is masterpiece</p>
                  <div className={cx('comment-sub-content')}>
                     <span className={cx('comment-time')}>09-14</span>
                     <span className={cx('comment-reply')}>Reply</span>
                  </div>
               </div>
               <div className={cx('active-container')}>
                  <div className={cx('heart-icon')}>
                     <HeartIcon width="2rem" height="2rem" />
                     <span className={cx('heart-count')}>1234</span>
                  </div>
               </div>
            </div>
            <div style={{ paddingLeft: '52px' }}>
               <div className={cx('reply-container')}>
                  <p className={cx('view-more')}>
                     View 4 replies
                     <ShareMoreArrow width="1.4rem" height="1.4rem" className={cx('icon')} />
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default CommnentList;
