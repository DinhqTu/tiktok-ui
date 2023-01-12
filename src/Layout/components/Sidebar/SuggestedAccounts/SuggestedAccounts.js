import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import * as suggestedAccountService from '~/services/suggestedAccountService';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    const [results, setResult] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
    useEffect(() => {
        const fetchApi = async () => {
            if (!seeAll) {
                const data = await suggestedAccountService.suggested(1, 5);
                setResult(data);
            } else {
                const data = await suggestedAccountService.suggested(1, 16);
                setResult(data);
            }
        };
        fetchApi();
    }, [seeAll]);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {results.map((data) => {
                return <AccountItem key={data.id} data={data} />;
            })}
            {!seeAll ? (
                <p
                    className={cx('more-account')}
                    onClick={() => setSeeAll(true)}
                >
                    Xem tất cả
                </p>
            ) : (
                <p
                    className={cx('more-account')}
                    onClick={() => setSeeAll(false)}
                >
                    Ẩn bớt
                </p>
            )}
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
