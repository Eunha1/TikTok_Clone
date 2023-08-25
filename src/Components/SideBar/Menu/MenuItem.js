import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ title, to, icon, activeIcon }) {
   return (
      <NavLink className={(nav) => cx('sidebar-item', { active: nav.isActive })} to={to}>
         <span className={cx('sidebar-icon')}>{icon}</span>
         <span className={cx('sidebar-activeicon')}>{activeIcon}</span>
         <span className={cx('sidebar-title')}>{title}</span>
      </NavLink>
   );
}

export default MenuItem;
