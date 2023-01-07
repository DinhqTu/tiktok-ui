import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('img')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1673240400&x-signature=BBosqF5TJTn%2F8My4vma%2FYeOm5Zg%3D"
                    alt=""
                />
                <p>
                    <Button className={cx('fl-btn')} primary>
                        Follow
                    </Button>
                </p>
            </div>
            <div className={cx('body')}>
                <p className={cx('nick-name')}>
                    DinhTuTuTwoZuu
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </p>{' '}
                <p className={cx('name')}>Dinh Quoc Tu</p>
            </div>
            <p className={cx('footer')}>
                <span className={cx('value-follow')}>8.4M </span>
                <span className={cx('follow')}>Follower</span>
                <span className={cx('value-like')}>8.4M </span>
                <span className={cx('like')}>Thích</span>
            </p>
        </div>
    );
}

export default AccountPreview;
