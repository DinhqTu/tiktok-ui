import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import * as searchService from '~/services/searchService';
import AccountItem from '~/components/AccoutItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const debounce = useDebounce(searchValue, 600);
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const results = await searchService.search(debounce);

            setSearchResult(results);
            setLoading(false);
        };

        fetchApi();
    }, [debounce]);

    const handleClearValue = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };

    const handleHiddenResult = () => {
        setShowResult(false);
    };

    const handleSearchValue = (e) => {
        const valueSearch = e.target.value;

        if (!valueSearch.startsWith(' ')) {
            setSearchValue(valueSearch);
        }
    };

    return (
        // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive
                delay={[0, 300]}
                render={(attrs) => (
                    <div
                        className={cx('search-results')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Tài khoản</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                // popperOptions={{
                //     modifiers: [{ name: 'flip', enabled: false }],
                // }}
                onClickOutside={handleHiddenResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        type="text"
                        placeholder="Tìm kiếm tài khoản hoặc video"
                        onChange={handleSearchValue}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    />
                    {!!searchValue && !loading && (
                        <FontAwesomeIcon
                            className={cx('clear')}
                            icon={faCircleXmark}
                            onClick={handleClearValue}
                        />
                    )}
                    {loading && (
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                    )}
                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        {/* <SearchIcon /> */}
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
