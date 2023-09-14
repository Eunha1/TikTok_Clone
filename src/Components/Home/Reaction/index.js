import classNames from 'classnames/bind';
import styles from './Reaction.module.scss';
import Tippy from '@tippyjs/react/headless';
import {
   HeartIcon,
   HeartActiveIcon,
   CommentIcon,
   SaveIcon,
   SaveActiveIcon,
   ShareIcon,
   BottomArrowIcon,
   TagIcon,
   SendIcon,
   FaceBookIcon,
   WhatsAppIcon,
   CopyLinkIcon,
   ShareMoreArrow,
} from '@/components/Icons/icons';
import IconReaction from './IconReaction';
import { Link } from 'react-router-dom';
import { routesConfig } from '@/config';

const cx = classNames.bind(styles);
function Reaction({ data }) {
   return (
      <div className={cx('reaction-element')}>
         <IconReaction icon={<HeartIcon />} activeIcon={<HeartActiveIcon />} reactionCount={data.likes_count} />
         <Link to={routesConfig.comment}>
            <IconReaction icon={<CommentIcon />} reactionCount={data.comments_count} />
         </Link>
         <IconReaction icon={<SaveIcon />} activeIcon={<SaveActiveIcon />} reactionCount={data.likes_count} />
         <Tippy
            interactive
            delay={[200, 600]}
            placement="top"
            render={(attrs) => (
               <div tabIndex="-1" {...attrs}>
                  <div className={cx('share-container')}>
                     <BottomArrowIcon className={cx('bottom-arrow-icon')} />
                     <div className={cx('share-wrapper')}>
                        <a href="https://www.youtube.com/" className={cx('share-link')}>
                           <TagIcon />
                           <span style={{ marginLeft: '18px' }}>Embed</span>
                        </a>
                        <a href="https://www.youtube.com/" className={cx('share-link')}>
                           <SendIcon />
                           <span style={{ marginLeft: '18px' }}>Send to friends</span>
                        </a>
                        <a href="https://www.facebook.com/" className={cx('share-link')}>
                           <FaceBookIcon />
                           <span style={{ marginLeft: '18px' }}>Share to Facebook</span>
                        </a>
                        <a href="https://www.whatsapp.com/" className={cx('share-link')}>
                           <WhatsAppIcon />
                           <span style={{ marginLeft: '18px' }}>Share to WhatsApp</span>
                        </a>
                        <a href="https://www.google.com" className={cx('share-link')}>
                           <CopyLinkIcon />
                           <span style={{ marginLeft: '18px' }}>Copy Link</span>
                        </a>
                        {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <a href="#" className={cx('share-more')}>
                           <ShareMoreArrow />
                        </a>
                     </div>
                  </div>
               </div>
            )}
         >
            <div>
               <IconReaction icon={<ShareIcon />} reactionCount={data.shares_count} />
            </div>
         </Tippy>
      </div>
   );
}

export default Reaction;
