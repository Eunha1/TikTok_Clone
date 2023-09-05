import classNames from 'classnames/bind';
import styles from './Information.module.scss';
import Image from '@/components/Images/Images';
import { EffectIcon } from '@/components/Icons/icons';

const cx = classNames.bind(styles);
function Information() {
   return (
      <div className={cx('information-container')}>
         <div className={cx('create-effect')}>
            <a
               href="https://effecthouse.tiktok.com/download?lang=en&utm_campaign=ttweb_entrance_v2&utm_source=tiktok_webapp_main"
               target="blank"
               className={cx('effect-link')}
            >
               <Image
                  src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/045b2fc7c278b9a30dd0.png"
                  className={cx('effect-image')}
               />
               <div className={cx('effect-text-container')}>
                  <EffectIcon className={cx('effect-icon')} />
                  <h4 className={cx('effect-text')}>Create Effect</h4>
               </div>
            </a>
         </div>
         <div className={cx('information-link')}>
            <a href="https://www.tiktok.com/about?lang=vi-VN" target="blank" className={cx('style-link')}>
               About
            </a>
            <a href="https://newsroom.tiktok.com/vi-vn/" target="blank" className={cx('style-link')}>
               Newsroom
            </a>
            <a href="https://www.tiktok.com/about/contact?lang=vi-VN" target="blank" className={cx('style-link')}>
               Contact
            </a>
            <a href="https://careers.tiktok.com/" target="blank" className={cx('style-link')}>
               Careers
            </a>
         </div>
         <div className={cx('information-link')}>
            <a href="https://www.tiktok.com/forgood" target="blank" className={cx('style-link')}>
               Tiktok for Good
            </a>
            <a
               href="https://www.tiktok.com/business/vi?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web&tt4b_lang_redirect=1"
               target="blank"
               className={cx('style-link')}
            >
               Advertise
            </a>
            <a href="https://developers.tiktok.com/?refer=tiktok_web" target="blank" className={cx('style-link')}>
               Deverlopers
            </a>
            <a href="https://www.tiktok.com/transparency" target="blank" className={cx('style-link')}>
               Transparency
            </a>
            <a href="https://www.tiktok.com/tiktok-rewards/vi-VN" target="blank" className={cx('style-link')}>
               Rewards
            </a>
            <a href="https://www.tiktok.com/embed" target="blank" className={cx('style-link')}>
               Embebs
            </a>
         </div>
         <div className={cx('information-link')}>
            <a href="https://support.tiktok.com/en?lang=en" target="blank" className={cx('style-link')}>
               Help
            </a>
            <a href="https://www.tiktok.com/safety/en/" target="blank" className={cx('style-link')}>
               Safety
            </a>
            <a
               href="https://www.tiktok.com/legal/page/row/terms-of-service/en"
               target="blank"
               className={cx('style-link')}
            >
               Terms
            </a>
            <a
               href="https://www.tiktok.com/legal/page/row/privacy-policy/en"
               target="blank"
               className={cx('style-link')}
            >
               Privacy
            </a>
            <a
               href="https://www.tiktok.com/creators/creator-portal/en-us/?lang=en"
               target="blank"
               className={cx('style-link')}
            >
               Creator Portal
            </a>
            <a href="https://www.tiktok.com/community-guidelines/en/" target="blank" className={cx('style-link')}>
               Community Guidelines
            </a>
         </div>
         <span className={cx('span-copyright')}>© 2023-Tiktok</span>
      </div>
   );
}

export default Information;
