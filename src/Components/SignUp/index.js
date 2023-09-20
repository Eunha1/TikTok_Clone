import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import Button from '../Button';
import { FaceBookIcon, GoogleIcon, TwitterIcon, WhatsAppIcon } from '../Icons/icons';
import { Link } from 'react-router-dom';
import { routesConfig } from '@/config';
const cx = classNames.bind(styles);
function SignUp() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('signup-container')}>
            <div className={cx('title')}>Sign up for TikTok</div>
            <div>
               <form>
                  <div className={cx('signup-content')}>
                     <div className={cx('input-title')}>Email</div>
                     <div className={cx('input-content')}>
                        <input placeholder="Enter your email" />
                     </div>
                  </div>
                  <div className={cx('signup-content')}>
                     <div className={cx('input-title')}>Password</div>
                     <div className={cx('input-content')}>
                        <input placeholder="Enter your password" />
                     </div>
                  </div>
                  <div className={cx('signup-content')}>
                     <div className={cx('input-title')}>Password</div>
                     <div className={cx('input-content')}>
                        <input placeholder="Re-Enter your password " />
                     </div>
                  </div>
               </form>
               <Button primary className={cx('btn-login')}>
                  Sign up
               </Button>
            </div>
            <div className={cx('divider-container')}>
               <span className={cx('span-divider')}>OR</span>
            </div>
            <div className={cx('another-login')}>
               <div className={cx('facebook')}>
                  <FaceBookIcon fill_1="#0075FA" fill_2="white" />
                  <span>Continue with Facebook</span>
               </div>
               <div className={cx('google')}>
                  <GoogleIcon />
                  <span>Continue with Google</span>
               </div>
               <div className={cx('whatsApp')}>
                  <WhatsAppIcon fill_1="white" fill_2="#25D366" />
                  <span>Continue with WhatsApp</span>
               </div>
               <div className={cx('twitter')}>
                  <TwitterIcon />
                  <span>Continue with Twitter - X</span>
               </div>
            </div>
            <div className={cx('suggest')}>
               Already have an account ?{' '}
               <Link to={routesConfig.login}>
                  <span>Log in</span>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default SignUp;
