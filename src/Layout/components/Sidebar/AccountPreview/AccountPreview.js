import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ModalContext } from '~/components/ModalProvider';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    const context = useContext(ModalContext);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('img')} src={data.avatar} alt="" />
                <p>
                    <Button
                        className={cx('fl-btn')}
                        primary
                        onClick={context.handleShowModal}
                    >
                        Follow
                    </Button>
                </p>
            </div>
            <div className={cx('body')}>
                <p className={cx('nick-name')}>
                    {data.nickname}
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        />
                    )}
                </p>{' '}
                <p className={cx('name')}>
                    {data.first_name + ' ' + data.last_name}
                </p>
            </div>
            <p className={cx('footer')}>
                <span className={cx('value-follow')}>
                    {data.followers_count}{' '}
                </span>
                <span className={cx('follow')}>Follower</span>
                <span className={cx('value-like')}>{data.likes_count} </span>
                <span className={cx('like')}>Thích</span>
            </p>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountPreview;
