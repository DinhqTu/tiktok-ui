import classNames from 'classnames/bind';
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

const cx = classNames.bind(styles);

function Sidebar() {
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
            <SuggestedAccounts label="Tài khoản được đề xuất" />
            <SuggestedAccounts className="" label="Các tài khoản đang follow" />
            <Discovery label="Khám phá" />
            <Footer />
        </aside>
    );
}

export default Sidebar;
