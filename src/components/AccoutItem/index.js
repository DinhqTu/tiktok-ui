import classNames from 'classnames/bind';
import styles from './AccoutItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/083bdd98191f72128eebdbcca718c29f~c5_100x100.jpeg?x-expires=1668956400&x-signature=Navc03P6PTfJFuFklbXAU2fV8ag%3D"
                alt="avatar"
            />
            <div className={cx('info')}>
                <span className={cx('name')}>Đinh Tú</span>
                <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                <p className={cx('username')}>dinhtu81</p>
            </div>
        </div>
    );
}

export default AccountItem;
