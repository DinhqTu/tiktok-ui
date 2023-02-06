import { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '~/Layout/components/Header';
import Sidebar from '../components/Sidebar';
import ModalForm from '~/components/ModalForm';
import { ModalContext } from '~/components/ModalProvider';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const context = useContext(ModalContext);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            {context.active === 'active' && <ModalForm />}
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
