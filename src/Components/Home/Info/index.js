import classNames from 'classnames/bind';
import styles from './Info.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '@/components/Button';
import { MusicIcon } from '@/components/Icons/icons';
const cx = classNames.bind(styles);
function Info({ data }) {
   const [isFollowing, setIsFollowing] = useState(false);
   return (
      <div className={cx('info-content')}>
         <h3 className={cx('author-title')}>{data.user.nickname}</h3>
         <h4 className={cx('author-name')}>{data.user.first_name + data.user.last_name}</h4>
         <div onClick={() => setIsFollowing(!isFollowing)}>
            {isFollowing === false ? (
               <Button className={cx('button')} outline>
                  Follow
               </Button>
            ) : (
               <Button className={cx('button')} outline_2>
                  Following
               </Button>
            )}
         </div>
         <div className={cx('description-wrapper')}>
            <div className={cx('description-content')}>
               <span>{data.description.split('#')[0]}</span>
               <Link className={cx('tag-name')}> #{data.description.split('#')[1]}</Link>
            </div>
         </div>
         <p>
            <MusicIcon /> {data.music}
         </p>
      </div>
   );
}

export default Info;
