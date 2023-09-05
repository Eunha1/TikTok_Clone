import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu';
import routes from '@/config/routes';
import {
   HomeIcon,
   UserGroupIcon,
   LiveIcon,
   HomeActiveIcon,
   UserGroupActiveIcon,
   LiveActiveIcon,
   ExploreIcon,
   ExploreActiveIcon,
} from '@/components/Icons/icons';
import FollowingAccount from './FollowingAccount/FollowingAccount';
import Information from './Information';
const cx = classNames.bind(styles);

function SideBar() {
   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem title="For You" to={routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
            <MenuItem
               title="Following"
               to={routes.following}
               icon={<UserGroupIcon />}
               activeIcon={<UserGroupActiveIcon />}
            />
            <MenuItem title="Explore" to={routes.explore} icon={<ExploreIcon />} activeIcon={<ExploreActiveIcon />} />
            <MenuItem title="Live" to={routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
         </Menu>
         <FollowingAccount label="Following account" />
         <Information />
      </aside>
   );
}
export default SideBar;
