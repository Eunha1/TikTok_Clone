import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '@/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountPreview({ data }) {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('header')}>
            <img className={cx('avatar')} src={data.avatar} alt={data.nick_name} />
            <Button primary>Follow</Button>
         </div>
         <div className={cx('body')}>
            <p className={cx('nickname')}>
               <strong>{data.nick_name}</strong>
               {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
            </p>
            <p className={cx('name')}>{data.stage_name}</p>
            <p className={cx('description')}>
               <strong className={cx('value')}>{(data.follower_count / 1000000).toFixed(2)}M </strong>
               <span className={cx('label')}>Follower </span>
               <strong className={cx('value')}>{(data.likes_count / 1000000).toFixed(2)}M </strong>
               <span className={cx('label')}>Likes </span>
            </p>
         </div>
      </div>
   );
}

export default AccountPreview;
