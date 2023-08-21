import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faEllipsisVertical,
   faEarthAsia,
   faCircleQuestion,
   faKeyboard,
   faUser,
   faCoins,
   faGear,
   faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';

import Button from '@/Components/Button';
import images from '@/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Menu from '@/Components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '@/Components/Icons';
import Image from '@/Components/Images';
import Search from '../Search';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
         title: 'language',
         data: [
            {
               type: 'Langguage',
               code: 'en',
               title: 'English',
            },
            {
               type: 'Langguage',
               code: 'vi',
               title: 'Tiếng Việt',
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'FeedBack and help',
      to: '/feedback',
   },

   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'KeyBroad Shotcut',
   },
];

const currentUser = true;
function Header() {
   const handelMenuChange = (menuIcon) => {
      console.log(menuIcon);
   };

   const userMenu = [
      {
         icon: <FontAwesomeIcon icon={faUser} />,
         title: 'View profile',
         to: '/Eunha',
      },
      {
         icon: <FontAwesomeIcon icon={faCoins} />,
         title: 'Get Coin',
         to: '/coin',
      },
      {
         icon: <FontAwesomeIcon icon={faGear} />,
         title: 'Setting',
         to: '/setting',
      },
      ...MENU_ITEMS,
      {
         icon: <FontAwesomeIcon icon={faSignOut} />,
         title: 'Sign Out',
         to: '/SignOut',
         separate: true,
      },
   ];
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('logo')}>
               <img src={images.logo} alt="TikTok" />
            </div>
            <Search />
            <div className={cx('action')}>
               {currentUser ? (
                  <>
                     <Tippy trigger="click" content="Upload Video">
                        <button className={cx('action-btn')}>
                           <UploadIcon />
                        </button>
                     </Tippy>
                     <Tippy trigger="click" content="Message">
                        <button className={cx('action-btn')}>
                           <MessageIcon />
                        </button>
                     </Tippy>
                     <Tippy trigger="click" content="Inbox">
                        <button className={cx('action-btn')}>
                           <InboxIcon />
                           <span className={cx('badge')}>12</span>
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button text>Upload</Button>
                     <Button primary>Log In</Button>
                  </>
               )}
               <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handelMenuChange}>
                  {currentUser ? (
                     <Image
                        className={cx('user-avatar')}
                        src="https://i.pinimg.com/originals/2a/65/3d/2a653d923281fcd64be38a76fc70ef76.jpg"
                        alt="Eunha"
                     />
                  ) : (
                     <button className={cx('more-button')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}
export default Header;
