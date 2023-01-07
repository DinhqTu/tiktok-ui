import PropTypes from 'prop-types';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Discovery.module.scss';
const cx = classNames.bind(styles);

function Music({ title }) {
    return (
        <div className={cx('wrapper-music')}>
            <FontAwesomeIcon className={cx('hashtag')} icon={faMusic} />
            <p className={cx('title')}>{title}</p>
        </div>
    );
}

Music.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Music;
