import classNames from 'classnames/bind';
import styles from './Upload.module.scss';
import { UploadIcon } from '@/components/Icons/icons';
import Button from '@/components/Button';
const cx = classNames.bind(styles);

function Upload() {
   return (
      <div className={cx('upload-wrapper')}>
         <div className={cx('upload-container')}>
            <div className={cx('upload-content')}>
               <div>
                  <div className={cx('upload-card')}>
                     <input type="file" id="file-input" style={{ display: 'none' }} />
                     <UploadIcon />
                     <div className={cx('upload-instruction')}>
                        <p className={cx('text-content')}>Select video to Upload</p>
                        <p className={cx('instruction-text')}>Or drag and drop a file</p>
                        <p className={cx('instruction-text')}>
                           Long videos can be split into multiple parts to get more exposure
                        </p>
                     </div>
                     <div className={cx('upload-instruction')}>
                        <p className={cx('instruction-text')}>MP4 or WebM</p>
                        <p className={cx('instruction-text')}>720x1280 resolutin or higher</p>
                        <p className={cx('instruction-text')}>Up to 30 minutes</p>
                        <p className={cx('instruction-text')}>Less than 2GB</p>
                     </div>
                     <Button primary className={cx('select-button')}>
                        Select file
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Upload;
