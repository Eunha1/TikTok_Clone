import classNames from 'classnames/bind';
import styles from './FollowingAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import images from '@/assets/images';
const cx = classNames.bind(styles);

function AccountItem() {
   const [account, setAccount] = useState([]);
   useEffect(() => {
      fetch(`https://mocki.io/v1/0aafbefa-49eb-4b8c-b3f1-ef7a49605026`)
         .then((res) => res.json())
         .then((res) => setAccount(res.data));
   }, []);

   return (
      <>
         {account.map((result) => (
            <div className={cx('account-wrapper')} key={result.id}>
               <img
                  className={cx('account-avatar')}
                  src={result.avatar === null ? images.noImage : result.avatar}
                  alt={result.nick_name}
               />
               <div className={cx('account-info')}>
                  <p className={cx('nickname')}>
                     <strong>{result.nick_name}</strong>
                     {result.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                  </p>
                  <p className={cx('name')}>{result.stage_name}</p>
               </div>
            </div>
         ))}
      </>
   );
}

export default AccountItem;
