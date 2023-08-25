import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

//
import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccounPrevew/AccountPreview';
import images from '@/assets/images';
const cx = classNames.bind(styles);

function AccountItem() {
   const [account, setAccount] = useState([]);
   useEffect(() => {
      fetch(`https://mocki.io/v1/d76011c6-54c1-4166-9b2e-3387146505f5`)
         .then((res) => res.json())
         .then((res) => setAccount(res.data));
   }, []);

   return (
      <div>
         {account.map((result) => (
            <div key={result.id}>
               <Tippy
                  interactive
                  delay={[600, 100]}
                  offset={[-20, 0]}
                  placement="bottom"
                  render={(attrs) => (
                     <div tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                           <AccountPreview key={result.id} data={result} />
                        </PopperWrapper>
                     </div>
                  )}
               >
                  <div className={cx('account-wrapper')}>
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
               </Tippy>
            </div>
         ))}
      </div>
   );
}

export default AccountItem;
