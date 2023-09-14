import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Button from '@/components/Button';
import Image from '@/components/Images';
import {
   CommentIcon,
   FaceBookIcon,
   HeartIcon,
   MusicIcon,
   SaveIcon,
   SendIcon,
   ShareIcon,
   TagIcon,
   TelegramIcon,
   WhatsAppIcon,
} from '@/components/Icons/icons';
const cx = classNames.bind(styles);

function Profile() {
   return (
      <div>
         <div className={cx('description-container')}>
            <div className={cx('info-container')}>
               <div className={cx('avatar')}>
                  <Image
                     src="https://i.pinimg.com/originals/23/e9/4f/23e94f99116b0d9900eacc913f7d0742.jpg"
                     className={cx('image')}
                  />
               </div>
               <div className={cx('unique-name')}>
                  <span className={cx('nickname')}>rlo.ldl</span>
                  <br />
                  <span className={cx('full-name')}>Eunha-gfriend</span>
               </div>
               <Button primary>Follow</Button>
            </div>
            <div className={cx('description-content')}>
               <div className={cx('description')}>
                  GFriend là một nhóm nhạc nữ Hàn Quốc . Nhóm bao gồm 6 thành viên: Sowon, Yerin, Eunha, Yuju, SinB và
                  Umji
                  <span className={cx('tag-name')}>#gfriend #eunha</span>
               </div>
               <div className={cx('music')}>
                  <MusicIcon />
                  <span className={cx('music-name')}>Summer Rain</span>
               </div>
            </div>
         </div>
         <div className={cx('main-content')}>
            <div style={{ position: 'relative', padding: '16px 0px 0px' }}>
               <div className={cx('reaction-icons')}>
                  <div className={cx('icons')}>
                     <button className={cx('button-react')}>
                        <span className={cx('span-react')}>
                           <HeartIcon fill="rgba(255,255,255,0.9)" />
                        </span>
                        <strong style={{ color: 'rgb(255,255,255', fontSize: '14px' }}>12k</strong>
                     </button>
                     <button className={cx('button-react')}>
                        <span className={cx('span-react')}>
                           <CommentIcon fill="rgba(255,255,255,0.9)" />
                        </span>
                        <strong style={{ color: 'rgb(255,255,255', fontSize: '14px' }}>12k</strong>
                     </button>
                     <button className={cx('button-react')}>
                        <span className={cx('span-react')}>
                           <SaveIcon fill="rgba(255,255,255,0.9)" />
                        </span>
                        <strong style={{ color: 'rgb(255,255,255', fontSize: '14px' }}>12k</strong>
                     </button>
                  </div>
                  <div className={cx('share')}>
                     <TagIcon className={cx('icon-margin')} />
                     <a href="https://www.youtube.com/">
                        <SendIcon width="2.4rem" height="2.4rem" className={cx('icon-margin')} />
                     </a>
                     <a href="https://www.youtube.com/">
                        <FaceBookIcon width="2.4rem" height="2.4rem" className={cx('icon-margin')} />
                     </a>
                     <a href="https://www.youtube.com/">
                        <WhatsAppIcon width="2.4rem" height="2.4rem" className={cx('icon-margin')} />
                     </a>
                     <a href="https://www.youtube.com/" className={cx('icon-margin')}>
                        <TelegramIcon />
                     </a>
                     <ShareIcon
                        width="1.6rem"
                        height="1.6rem"
                        fill="rgba(255,255,255,0.9)"
                        className={cx('icon-margin')}
                     />
                  </div>
               </div>
               <div className={cx('link-video-container')}>
                  <p className={cx('link-video')}>https://www.youtube.com/</p>
                  <button className={cx('copy-link')}>Copy Link</button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Profile;
