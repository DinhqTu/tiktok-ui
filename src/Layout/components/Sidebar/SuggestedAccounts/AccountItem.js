import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
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
    );
}

export default AccountItem;
