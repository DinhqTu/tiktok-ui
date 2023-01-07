import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Discovery.module.scss';
import Hashtag from './Hashtag';
import Music from './Music';

const cx = classNames.bind(styles);

function Discovery({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <p className={cx('menu-item')}>
                <Hashtag title="suthatla" />
                <Hashtag title="mackedoi" />
                <Hashtag title="hoaroikemat" />
                <Music title="Vì Em Quá Yêu Anh - Mỹ Tâm" />
                <Music title="Tết Đến Xuân Sang - Hoài Lâm ft Hoài Linh Hoài Lâm ft Hoài Linh" />
                <Hashtag title="nuocmattuonroi" />
                <Hashtag title="trochoiketthuc" />
            </p>
        </div>
    );
}

Discovery.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Discovery;
