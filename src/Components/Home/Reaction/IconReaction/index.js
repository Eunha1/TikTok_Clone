import classNames from 'classnames/bind';
import styles from './IconReaction.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);

function IconReaction({ icon, activeIcon, reactionCount }) {
   const [isActive, setIsActive] = useState(false);
   const [ReactionCount, setReactionCount] = useState(reactionCount);
   const handleActive = () => {
      const add = isActive ? -1 : 1;
      if (activeIcon) {
         setIsActive(!isActive);
         setReactionCount(ReactionCount + add);
      }
   };
   return (
      <button className={cx('button-react')}>
         <span className={cx('span-react')} onClick={handleActive}>
            {isActive === false ? icon : activeIcon}
         </span>
         <strong>{ReactionCount}</strong>
      </button>
   );
}

export default IconReaction;
