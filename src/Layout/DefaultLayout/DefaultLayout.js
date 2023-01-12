import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '~/Layout/components/Header';
import Sidebar from '../components/Sidebar';
import ModalLogin from '~/components/ModalForm';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div style={{ height: '1200px' }} className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            <ModalLogin />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
