import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Discovery.module.scss';
const cx = classNames.bind(styles);
function Hashtag({ title }) {
    return (
        <div className={cx('wrapper-hashtag')}>
            <FontAwesomeIcon className={cx('hashtag')} icon={faHashtag} />
            <p className={cx('title')}>{title}</p>
        </div>
    );
}

Hashtag.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Hashtag;
