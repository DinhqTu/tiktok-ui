import Video from '~/components/Video';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
    const [volume, setVolume] = useState(0.4);
    const [prevVolume, setPrevVolume] = useState(volume);
    const [mute, setMute] = useState(false);

    const adjustVolume = (e) => {
        setVolume(e.target.value / 100);
    };

    const toggleMuted = () => {
        if (mute) {
            setVolume(prevVolume);
            setMute(false);
        } else {
            setPrevVolume(volume);
            setVolume(0);
            setMute(true);
        }
    };

    return (
        <div className={cx('container')}>
            <Video
                mute={mute}
                volume={volume}
                setVolume={setVolume}
                adjustVolume={adjustVolume}
                toggleMuted={toggleMuted}
            />
        </div>
    );
}

export default Home;
