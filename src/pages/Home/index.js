import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import Video from '~/components/Video';
import styles from './Home.module.scss';
import * as videoService from '~/services/videoService';

const cx = classNames.bind(styles);

function Home() {
    const [video, setVideo] = useState([]);
    const [page, setPage] = useState(1);
    const [volume, setVolume] = useState(0.6);
    const [prevVolume, setPrevVolume] = useState(volume);
    const [mute, setMute] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await videoService.video('for-you', page);
            setVideo((prev) => [...prev, ...data]);
        };

        fetchApi();
    }, [page]);

    useEffect(() => {
        window.addEventListener('scroll', loadPage);
        return () => {
            window.removeEventListener('scroll', loadPage);
        };
    });

    const loadPage = () => {
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            setPage((page) => page + 1);
        }
    };

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
            {video.map((data, index) => {
                return (
                    <Video
                        key={index}
                        data={data}
                        mute={mute}
                        volume={volume}
                        setVolume={setVolume}
                        adjustVolume={adjustVolume}
                        toggleMuted={toggleMuted}
                    />
                );
            })}
        </div>
    );
}

export default Home;
