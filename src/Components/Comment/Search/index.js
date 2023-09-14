import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import { SearchIcon } from '@/components/Icons/icons';
const cx = classNames.bind(styles);
function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [showResult, setShowResult] = useState(true);
   const [loading, setLoading] = useState(false);
   const inputRef = useRef();

   const handleClear = () => {
      setSearchValue('');
      inputRef.current.focus();
   };
   return (
      <div className={cx('search')}>
         <input
            ref={inputRef}
            value={searchValue}
            placeholder="Find related content"
            spellCheck="false"
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowResult(true)}
         />
         {!!searchValue && !loading && (
            <button className={cx('clear')} onClick={handleClear}>
               <FontAwesomeIcon icon={faCircleXmark} />
            </button>
         )}
         {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
         <span className={cx('spliter')}></span>
         <Tippy content="Search">
            <button className={cx('search-btn')}>
               <SearchIcon />
            </button>
         </Tippy>
      </div>
   );
}

export default Search;
