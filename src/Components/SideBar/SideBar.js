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
} from '@/components/Icons/icons';
import SuggestedAccount from '@/components/SuggestedAccount/SuggestedAccount';
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
            <MenuItem title="Live" to={routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
         </Menu>
         <SuggestedAccount label="Suggested account" />
         <SuggestedAccount label="Following account" />
      </aside>
   );
}
export default SideBar;
