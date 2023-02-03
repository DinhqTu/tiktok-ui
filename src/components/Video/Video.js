import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
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
import {
    Icon_Commnet,
    Icon_Heart,
    Icon_Muted,
    Icon_Pause_Video,
    Icon_Play_Video,
    Icon_Share,
    Icon_Volume,
} from '../Icons';

const cx = classNames.bind(styles);
function Video({ data, mute, volume, adjustVolume, toggleMuted }) {
    const context = useContext(ModalContext);
    const videoRef = useRef();
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        if (mute) {
            videoRef.current.volume = 0;
        } else {
            videoRef.current.volume = volume;
        }
    });

    const handlePlayVideo = () => {
        if (playing === false) {
            setPlaying(true);
            videoRef.current.play();
        }
    };

    const handlePauseVideo = () => {
        if (playing === true) {
            setPlaying(false);
            videoRef.current.pause();
        }
    };

    const togglePlayVideo = () => {
        if (playing === true) {
            handlePauseVideo();
        } else {
            handlePlayVideo();
        }
    };

    const playVideoInViewport = () => {
        // dùng để lấy các vị trí x,y,height,width,... của phần tử
        var bounding = videoRef.current.getBoundingClientRect();
        // console.log('offsetHeight', document.body.offsetHeight);
        // console.log('scrolly', window.scrollY);
        // console.log('innerHeight', window.innerHeight);
        if (
            bounding.top >= -0.3 * bounding.height &&
            bounding.bottom <=
                (document.documentElement.clientHeight +
                    0.4 * bounding.height ||
                    window.innerHeight + 0.4 * bounding.height) &&
            bounding.right <=
                (document.documentElement.clientWidth || window.innerWidth)
        ) {
            handlePlayVideo();
        } else {
            handlePauseVideo();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', playVideoInViewport);
        return () => window.removeEventListener('scroll', playVideoInViewport);
    });

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
                            <AccountPreview key={data.id} data={data} />
                        </div>
                    )}
                >
                    <Link to={'/'}>
                        <Image
                            alt={data?.user.nickname}
                            src={data?.user.avatar}
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
                            offset={[28, 35]}
                            delay={[1000, 0]}
                            render={(props) => (
                                <div tabIndex="-1" {...props}>
                                    <AccountPreview key={data.id} data={data} />
                                </div>
                            )}
                        >
                            <span>
                                <span className={cx('nick-name')}>
                                    {data?.user.nickname}
                                </span>
                                <span className={cx('full-name')}>
                                    {data?.user.first_name +
                                        ' ' +
                                        data?.user.last_name}
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
                            {data.description}
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
                        {data.music}
                    </div>
                </div>
                <div className={cx('video-container')}>
                    <div className={cx('video_content')}>
                        <video
                            loop
                            // muted="muted"
                            // autoPlay
                            ref={videoRef}
                            className={cx('video')}
                            src={data.file_url}
                            onClick={togglePlayVideo}
                        ></video>
                        <span
                            className={cx('btn_toggle_video')}
                            onClick={togglePlayVideo}
                        >
                            {playing ? (
                                <Icon_Pause_Video />
                            ) : (
                                <Icon_Play_Video />
                            )}
                        </span>
                        <div className={cx('action_right')}>
                            <span className={cx('wrapper_volumn')}>
                                <input
                                    className={cx('btn_toggle_volumn')}
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="1"
                                    orient="vertical"
                                    onChange={(e) => adjustVolume(e)}
                                    value={volume * 100}
                                />
                            </span>
                            <span
                                className={cx('btn_mute')}
                                onClick={toggleMuted}
                            >
                                {mute ? <Icon_Muted /> : <Icon_Volume />}
                            </span>
                        </div>
                    </div>
                    <div className={cx('actions')}>
                        <span
                            className={cx('action_btn')}
                            onClick={context.handleShowModal}
                        >
                            <Icon_Heart />
                        </span>
                        <p>{data.likes_count}</p>
                        <span
                            className={cx('action_btn')}
                            onClick={context.handleShowModal}
                        >
                            <Icon_Commnet />
                        </span>
                        <p>{data.comments_count}</p>
                        <span className={cx('action_btn')}>
                            <Icon_Share />
                        </span>
                        <p>{data.shares_count}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

Video.propTypes = {
    data: PropTypes.object.isRequired,
    mute: PropTypes.bool.isRequired,
    volume: PropTypes.number.isRequired,
    adjustVolume: PropTypes.func.isRequired,
    toggleMuted: PropTypes.func.isRequired,
};

export default Video;
