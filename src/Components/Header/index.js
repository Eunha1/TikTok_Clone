import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
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

import images from '@/assets/images';
import Search from './Search';
import routesConfig from '@/config/routes';
import Image from '@/components/Images';
import Button from '@/components/Button';
import Menu from '@/components/Popper/Menu/Menu';
import {
   DownloadIcon,
   InboxIcon,
   MessageIcon,
   PCLightIcon,
   PlusIcon,
   RightArrowIcon,
   TopArrowIcon,
} from '@/components/Icons/icons';

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
               <Link to={routesConfig.home}>
                  <img src={images.logo} alt="TikTok" />
               </Link>
            </div>
            <Search />
            <div className={cx('action')}>
               {currentUser ? (
                  <>
                     <Link to={routesConfig.upload}>
                        <div className={cx('upload-icon')}>
                           <PlusIcon />
                           <span className={cx('upload-text')}>Upload</span>
                        </div>
                     </Link>
                     <div>
                        <HeadlessTippy
                           interactive
                           delay={[300, 1000]}
                           placement="bottom"
                           render={(attrs) => (
                              <div
                                 className={cx('download-popup')}
                                 style={{ backgroundColor: 'rgb(255, 255, 255)', left: '-42px' }}
                                 tabIndex="-1"
                                 {...attrs}
                              >
                                 <TopArrowIcon className={cx('top-arrow')} />
                                 <div className={cx('download-container')}>
                                    <PCLightIcon className={cx('pc-light-icon')} />
                                    <p className={cx('popup-title')}>Ứng dụng TikTok dành cho máy tính</p>
                                    <Button primary className={cx('download-button')}>
                                       {' '}
                                       Tải về{' '}
                                    </Button>
                                    <Link to={routesConfig.download}>
                                       <p className={cx('popup-tip')}>
                                          Thay vào đó , tải ứng dụng di động về
                                          <RightArrowIcon className={cx('right-arrow')} />
                                       </p>
                                    </Link>
                                 </div>
                              </div>
                           )}
                        >
                           <div className={cx('action-btn')}>
                              <DownloadIcon />
                           </div>
                        </HeadlessTippy>
                     </div>
                     <Tippy trigger="click" content="Message">
                        <div className={cx('action-btn')}>
                           <MessageIcon />
                        </div>
                     </Tippy>
                     <Tippy trigger="click" content="Inbox">
                        <div className={cx('action-btn')}>
                           <InboxIcon />
                           <span className={cx('badge')}>12</span>
                        </div>
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
