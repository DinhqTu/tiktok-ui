import Video from '~/components/Video';
import classNames from 'classnames/bind';
import styles from './Home.module.scss'

const cx = classNames.bind(styles)

function Home() {
    // console.log('innerHeight', window.innerHeight);
    // console.log('scroll y', window.scrollY);
    // console.log(document.body.offsetHeight);
    return <div className={cx('container')}>
        <Video />
    </div>;
}

export default Home;
