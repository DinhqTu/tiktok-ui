import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from '../AccountPreview';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    // console.log(data);
    return (
        <div>
            <HeadlessTippy
                // visible
                interactive
                delay={[1000, 0]}
                placement="bottom"
                offset={[-20, 0]}
                render={(prop) => (
                    <div className={cx('')} tabIndex="-1" {...prop}>
                        <PopperWrapper>
                            <AccountPreview key={data.id} data={data} />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('account-item')}>
                    <img className={cx('img')} src={data.avatar} alt="" />
                    <div>
                        <strong className={cx('account-info')}>
                            <p className={cx('nick-name')}>{data.nickname}</p>
                            {data.tick && (
                                <FontAwesomeIcon
                                    className={cx('check')}
                                    icon={faCheckCircle}
                                />
                            )}
                        </strong>
                        <p className={cx('name')}>
                            {data.first_name + ' ' + data.last_name}
                        </p>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
