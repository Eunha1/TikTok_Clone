import classNames from 'classnames/bind';
import styles from './Info.module.scss';
import { Link } from 'react-router-dom';
import Button from '@/components/Button/Button';
import { MusicIcon } from '@/components/Icons/icons';
const cx = classNames.bind(styles);
function Info() {
   return (
      <div className={cx('info-content')}>
         <p>Eunha - Gfriend</p>
         <div className={cx('description')}>
            GFriend là một nhóm nhạc nữ Hàn Quốc được thành lập vào năm 2015 bởi Source Music. Nhóm bao gồm 6 thành
            viên: Sowon, Yerin, Eunha, Yuju, SinB và Umji
            <Link className={cx('tagname')}> #TagName</Link>
         </div>
         <p>
            <MusicIcon /> Music name
         </p>
         <Button className={cx('button')} outline>
            Follow
         </Button>
      </div>
   );
}

export default Info;
