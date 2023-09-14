import classNames from 'classnames/bind';
import styles from './PostComment.module.scss';
import { EmojiIcon, TagUser } from '@/components/Icons/icons';
const cx = classNames.bind(styles);
function PostComment() {
   return (
      <div className={cx('postComment-container')}>
         <div className={cx('postComment-content')}>
            <div style={{ flex: '1 1 auto' }}>
               <div className={cx('layout-content')}>
                  <input className={cx('input-area')} placeholder="Add Comment ..." />
                  <div className={cx('comment-icon')}>
                     <TagUser width="2.2rem" height="2.2rem" fill="rgb(255,255,255)" />
                  </div>
                  <div className={cx('comment-icon')}>
                     <EmojiIcon width="2.2rem" height="2.2rem" fill="rgb(255,255,255)" />
                  </div>
               </div>
            </div>
            <div className={cx('post-button')}>Posts</div>
         </div>
      </div>
   );
}
export default PostComment;
