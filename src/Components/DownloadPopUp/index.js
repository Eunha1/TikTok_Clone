import classNames from 'classnames/bind';
import styles from './DownloadPopUp.module.scss';
import { Link } from 'react-router-dom';
import { CloseIcon, QRCodeWrapper } from '../Icons/icons';
import Image from '../Images';
import routerConfig from '@/config/routes';
const cx = classNames.bind(styles);

function DownloadPopUp() {
   return (
      <div id="portal" style={{ position: 'absolute', zIndex: '9999' }}>
         <div className={cx('modal-container')}>
            <div className={cx('modal-backdrop')}></div>
            <div tabIndex="-1" className={cx('modal-content')}>
               <div>
                  <div className={cx('modal-vertical')}>
                     <section className={cx('modal-section')}>
                        <div className={cx('modal-header')}>
                           <Link to={routerConfig.home}>
                              <div className={cx('close-wrapper')}>
                                 <CloseIcon />
                              </div>
                           </Link>
                           <p className={cx('title')}>Tải ứng dụng Tiktok</p>
                        </div>
                        <div className={cx('modal-body-content')}>
                           <div className={cx('download-qrcode')}>
                              <p className={cx('qr-title')}>Hãy quét mã QR để tải Tiktok về máy</p>
                              <div className={cx('qrcode-wrapper')}>
                                 <QRCodeWrapper width="176" height="176" />
                                 <Image
                                    src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/47624c235266dedd8e4d.png"
                                    className={cx('qrcode-image')}
                                 />
                              </div>
                           </div>
                           <div className={cx('download-link-container')}>
                              <p className={cx('sub-title')}>Tải ứng dụng từ cửa hàng</p>
                              <div className={cx('download-store')}>
                                 <a
                                    href="https://apps.microsoft.com/store/detail/tiktok/9NH2GPH4JZS4?hl=vi-vn&gl=vn&rtc=1"
                                    target="blank"
                                    className={cx('link-store')}
                                 >
                                    <Image
                                       src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/f1596f39e85631c052c4.png"
                                       className={cx('image-icon')}
                                    />
                                 </a>
                                 <a
                                    href="https://apps.apple.com/MY/app/id1235601864?mt=8"
                                    target="blank"
                                    className={cx('link-store')}
                                 >
                                    <Image
                                       src="https://logos-download.com/wp-content/uploads/2016/06/Available_on_the_App_Store_logo.png"
                                       className={cx('image-icon')}
                                    />
                                 </a>
                                 <a
                                    href="https://www.amazon.com/dp/B07KR1RJL2/"
                                    target="blank"
                                    className={cx('link-store')}
                                 >
                                    <Image
                                       src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/devportal2/res/images/amazon-appstore-badge-english-black.png"
                                       className={cx('image-icon')}
                                    />
                                 </a>
                                 <a
                                    href="https://play.google.com/store/apps/details?id=com.ss.android.ugc.trill&referrer=af_tranid%3DMit4qARlowTM0AoSr7k3sA"
                                    target="blank"
                                    className={cx('link-store')}
                                 >
                                    <Image
                                       src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0"
                                       className={cx('image-icon')}
                                    />
                                 </a>
                              </div>
                           </div>
                        </div>
                     </section>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default DownloadPopUp;
