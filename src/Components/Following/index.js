import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Image from '@/components/Images';
import Button from '@/components/Button';
import Video from '@/components/Video/Video';
const cx = classNames.bind(styles);
function Following() {
   const [data, setData] = useState([]);
   useEffect(() => {
      fetch(`https://tiktok.fullstack.edu.vn/api/users/suggested?page=2&per_page=13`)
         .then((res) => res.json())
         .then((res) => setData(res.data));
   }, []);

   return (
      <div className={cx('following-wrapper')}>
         <div className={cx('following-container')}>
            {data.map((result) => (
               <div className={cx('following-content')} key={result.id}>
                  <Link to={`/@${result.nickname}`} target="_blank" className={cx('following-card')}>
                     <div className={cx('suggested-follower')}>
                        <Image className={cx('poster')} src={result.popular_video.thumb_url} />
                        <Video className={cx('thumbnail-container')} src={result.popular_video.file_url} />
                     </div>
                     <div className={cx('info')}>
                        <Image className={cx('avatar')} src={result.avatar} />
                        <h3 className={cx('name')}>{result.first_name + result.last_name}</h3>
                        <h4 className={cx('nickname-content')}>
                           <span className={cx('nickname')}>{result.nickname}</span>
                           {result.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </h4>
                        <Button primary>Follow</Button>
                     </div>
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
}
export default Following;
