import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useContext } from 'react';

import Button from '~/components/Button';
import { ModalContext } from '~/components/ModalProvider';
import { Wrapper } from '~/components/Popper';
import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    const context = useContext(ModalContext);
    return (
        <Wrapper>
            <div className={cx('preview_wrapper')}>
                <div className={cx('preview_header')}>
                    <Image
                        className={cx('preview_img')}
                        src={data?.user.avatar}
                        alt=""
                    />
                    <p>
                        <Button
                            className={cx('preview_fl-btn')}
                            outline
                            onClick={context.handleShowModal}
                        >
                            Follow
                        </Button>
                    </p>
                </div>
                <div className={cx('preview_body')}>
                    <p className={cx('preview_nick-name')}>
                        {data?.user.nickname}
                        <FontAwesomeIcon
                            className={cx('preview_check')}
                            icon={faCheckCircle}
                        />
                        {/* )} */}
                    </p>{' '}
                    <p className={cx('preview_name')}>
                        {data?.user.first_name + ' ' + data?.user.last_name}
                    </p>
                </div>
                <p className={cx('preview_footer')}>
                    <span className={cx('preview_value-follow')}>
                        {data?.user.followers_count}
                    </span>
                    <span className={cx('preview_follow')}>Follower</span>
                    <span className={cx('preview_value-like')}>
                        {data?.user.likes_count}
                    </span>
                    <span className={cx('preview_like')}>Thích</span>
                </p>
                <p className={cx('preview_contact')}>{data?.user.bio}</p>
            </div>
        </Wrapper>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountPreview;
