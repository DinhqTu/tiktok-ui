import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './AccoutItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt="avatar" />
            <div className={cx('info')}>
                <span className={cx('name')}>{data.full_name}</span>
                {data.tick && (
                    <FontAwesomeIcon
                        className={cx('icon')}
                        icon={faCheckCircle}
                    />
                )}
                <p className={cx('username')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
