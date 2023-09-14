import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '@/components/Images';
import { Link } from 'react-router-dom';
import { routesConfig } from '@/config';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
   return (
      <Link to={routesConfig.profileLink(data.nickname)} className={cx('wrapper')}>
         <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
         <div className={cx('info')}>
            <p className={cx('name')}>
               <span>{data.full_name}</span>
               {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
            </p>
            <span className={cx('username')}>{data.nickname}</span>
         </div>
      </Link>
   );
}

export default AccountItem;
