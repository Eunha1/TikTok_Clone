import classNames from 'classnames/bind';
import styles from './Reaction.module.scss';

import { HeartIcon, CommentIcon, NonameIcon, ShareIcon } from '@/components/Icons/icons';
const cx = classNames.bind(styles);
function Reaction() {
   return (
      <div className={cx('reaction-element')}>
         <button className={cx('button-react')}>
            <span className={cx('span-react')}>
               <HeartIcon />
            </span>
            <strong>1234</strong>
         </button>
         <button className={cx('button-react')}>
            <span className={cx('span-react')}>
               <CommentIcon />
            </span>
            <strong>1234</strong>
         </button>
         <button className={cx('button-react')}>
            <span className={cx('span-react')}>
               <NonameIcon />
            </span>
            <strong>1234</strong>
         </button>
         <button className={cx('button-react')}>
            <span className={cx('span-react')}>
               <ShareIcon />
            </span>
            <strong>1234</strong>
         </button>
      </div>
   );
}

export default Reaction;
