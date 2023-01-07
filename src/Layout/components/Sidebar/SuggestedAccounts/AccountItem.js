import HeadlessTippy from '@tippyjs/react/headless';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from '../AccountPreview';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function AccountItem() {
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
                            <AccountPreview />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('img')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/39911deb09b62b80810dec42c0722bbd~c5_100x100.jpeg?x-expires=1673193600&x-signature=YpkoVZZmL8ChumFeMoAvIxDYbZ4%3D"
                        alt=""
                    />
                    <div>
                        <strong className={cx('account-info')}>
                            <p className={cx('nick-name')}>DinhTuTuTwoZuu</p>
                            <FontAwesomeIcon
                                className={cx('check')}
                                icon={faCheckCircle}
                            />
                        </strong>
                        <p className={cx('name')}>Đinh Quốc Tú</p>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default AccountItem;
