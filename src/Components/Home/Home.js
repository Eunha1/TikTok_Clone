import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Image from '../Images/Images';
import Video from './Video';
import Reaction from './Reaction';
import Info from './Info';

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
               <Info />
               <div className={cx('video-content')}>
                  <Video />
                  <Reaction />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
