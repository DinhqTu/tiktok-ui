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

function AccountPreview() {
    const context = useContext(ModalContext);
    return (
        <Wrapper>
            <div className={cx('preview_wrapper')}>
                <div className={cx('preview_header')}>
                    <Image
                        className={cx('preview_img')}
                        src={'https:fullstack.edu.vn'}
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
                        Hoaalaaaa
                        {/* {data.tick && ( */}
                        <FontAwesomeIcon
                            className={cx('preview_check')}
                            icon={faCheckCircle}
                        />
                        {/* )} */}
                    </p>{' '}
                    <p className={cx('preview_name')}>
                        {/* {data.first_name + ' ' + data.last_name} */}
                        Nguyễn Thị Hoa Lệ
                    </p>
                </div>
                <p className={cx('preview_footer')}>
                    <span className={cx('preview_value-follow')}>
                        {/* {data.followers_count}{' '} */}
                        700
                    </span>
                    <span className={cx('preview_follow')}>Follower</span>
                    <span className={cx('preview_value-like')}>
                        {/* {data.likes_count}{' '} */}
                        800
                    </span>
                    <span className={cx('preview_like')}>Thích</span>
                </p>
                <p className={cx('preview_contact')}>
                    Liên hệ công việc : huynhhoanga8@gmail.com ( Ân Huỳnh )
                </p>
            </div>
        </Wrapper>
    );
}

export default AccountPreview;
