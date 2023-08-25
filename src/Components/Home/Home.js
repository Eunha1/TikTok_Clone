import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

//
import SummerRain from '@/Video/SummerRain.mp4';
import Button from '../Button/Button';
import Image from '../Images/Images';
import {
   CommentIcon,
   HeartIcon,
   MusicIcon,
   NonameIcon,
   PauseIcon,
   PlayIcon,
   ShareIcon,
   SoundOffIcon,
   SoundOnIcon,
} from '../Icons/icons';
const cx = classNames.bind(styles);

function Home() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('item-content')}>
            <Image
               className={cx('avatar')}
               src="https://i.pinimg.com/originals/23/e9/4f/23e94f99116b0d9900eacc913f7d0742.jpg"
               alt=""
            ></Image>
            <div className={cx('main-content')}>
               <div className={cx('info-content')}>
                  <p>Eunha - Gfriend</p>
                  <div className={cx('description')}>
                     GFriend là một nhóm nhạc nữ Hàn Quốc được thành lập vào năm 2015 bởi Source Music. Nhóm bao gồm 6
                     thành viên: Sowon, Yerin, Eunha, Yuju, SinB và Umji
                     <Link> #TagName</Link>
                  </div>
                  <p>
                     <MusicIcon />
                     Music name{' '}
                  </p>
                  <Button className={cx('button')} outline>
                     Follow
                  </Button>
               </div>
               <div className={cx('video-content')}>
                  <div className={cx('video-main')}>
                     <video src={SummerRain} className={cx('video')} />
                     <SoundOffIcon className={cx('sound-icon')} />
                     <SoundOnIcon className={cx('sound-icon')} />
                     <PlayIcon className={cx('play-icon')} />
                     <PauseIcon className={cx('play-icon')} />
                  </div>
                  <div className={cx('reaction-button')}>
                     <button className={cx('button-')}>
                        <span>
                           <HeartIcon />
                        </span>
                        <strong>1234</strong>
                     </button>
                     <button>
                        <span>
                           <CommentIcon />
                        </span>
                        <strong>1234</strong>
                     </button>
                     <button>
                        <span>
                           <NonameIcon />
                        </span>
                        <strong>1234</strong>
                     </button>
                     <button>
                        <span>
                           <ShareIcon />
                        </span>
                        <strong>1234</strong>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
