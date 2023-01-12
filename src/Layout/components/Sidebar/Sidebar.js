import classNames from 'classnames/bind';
import { useContext } from 'react';
import Button from '~/components/Button';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import config from '~/config';
import Discovery from './Discovery';
import Footer from './Footer';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import SuggestedAccounts from './SuggestedAccounts';
import { ModalContext } from '~/components/ModalProvider';

const cx = classNames.bind(styles);

function Sidebar() {
    const currentUser = false;
    const context = useContext(ModalContext);
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title={'Dành cho bạn'}
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title={'Đang Follow'}
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title={'LIVE'}
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
            </Menu>
            {currentUser || (
                <div className={cx('wrapper_login')}>
                    <p className={cx('title')}>
                        Đăng nhập để follow các tác giả, thích video và xem bình
                        luận.
                    </p>
                    <span onClick={context.handleShowModal}>
                        <Button large outline className={cx('login_btn')}>
                            Đăng nhập
                        </Button>
                    </span>
                </div>
            )}
            <SuggestedAccounts label="Tài khoản được đề xuất" />
            {currentUser && (
                <SuggestedAccounts
                    className=""
                    label="Các tài khoản đang follow"
                />
            )}
            <Discovery label="Khám phá" />
            <Footer />
        </aside>
    );
}

export default Sidebar;
