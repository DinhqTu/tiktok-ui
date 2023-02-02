import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import Button from '../Button';
import styles from './Video.module.scss';
import Image from '../Image';
import { useContext } from 'react';
import { ModalContext } from '../ModalProvider';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function Video() {
    const context = useContext(ModalContext);
    return (
        <div className={cx('wrapper')}>
            <div>
                <HeadlessTippy
                    // visible
                    interactive
                    offset={[120, 0]}
                    delay={[1000, 0]}
                    render={(props) => (
                        <div tabIndex="-1" {...props}>
                            <AccountPreview />
                        </div>
                    )}
                >
                    <Link to={'/'}>
                        <Image
                            alt="hoaa"
                            src="/@hchairbeauty_factory/live"
                            className={cx('avatar')}
                        />
                    </Link>
                </HeadlessTippy>
            </div>
            <div className={cx('content')}>
                <div className={cx('info-content')}>
                    <div className={cx('author-content')}>
                        <HeadlessTippy
                            // visible
                            interactive
                            offset={[-52, 38]}
                            delay={[1000, 0]}
                            render={(props) => (
                                <div tabIndex="-1" {...props}>
                                    <AccountPreview />
                                </div>
                            )}
                        >
                            <span>
                                <span className={cx('nick-name')}>
                                    Hoa_roi_cua_phat
                                </span>
                                <span className={cx('full-name')}>
                                    Hoa Roi Cua Phat
                                </span>
                            </span>
                        </HeadlessTippy>
                    </div>

                    <Button
                        outline
                        small
                        className={cx('btn_follow')}
                        onClick={context.handleShowModal}
                    >
                        Follow
                    </Button>
                    <div className={cx('text-content')}>
                        <span className={cx('desc-video')}>
                            Đừng xem tới cuối video
                        </span>
                        <a href="#">#humanhairwig</a> <a href="#">#wigforyou</a>{' '}
                        <a href="#">#lacefrontwig</a>
                        <a href="#">#fashionandbeauty</a> <a href="#">#live</a>
                    </div>
                    <div className={cx('music-content')}>
                        <FontAwesomeIcon
                            className={cx('hashtag')}
                            icon={faMusic}
                        />
                        Hey It's Me - Official Sound Studio
                    </div>
                </div>
                <div>
                    <video
                        className={cx('video-content')}
                        src={
                            'https://files.fullstack.edu.vn/f8-tiktok/videos/1350-63c6787ca8c8d.mp4'
                        }
                    ></video>
                </div>
            </div>
        </div>
    );
}

export default Video;
