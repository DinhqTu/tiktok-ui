import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import {
    faChartLine,
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMoon,
    faPlus,
    faRightFromBracket,
    faToggleOff,
    faUser,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/image';
import Menu from '~/components/Popper/Menu';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import Image from '~/components/Image';
import Search from '../Search';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Anh',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt bàn phím',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ tối',
        iconRight: <FontAwesomeIcon icon={faToggleOff} />,
    },
];

const MENU_USER = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
        to: '/viewprofile',
    },
    {
        icon: <FontAwesomeIcon icon={faBitcoin} />,
        title: 'Nhận xu',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faChartLine} />,
        title: 'Xem phân tích',
        to: '/chart',
    },
    {
        icon: <FontAwesomeIcon icon={faVideo} />,
        title: 'LIVE Studio',
        to: '/stream',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài đặt',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Đăng Xuất',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle logic language
                break;

            default:
                break;
        }
    };

    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <Link to={routesConfig.home} className={cx('logo-header')}>
                        <img src={images.logo} alt="tiktok" />
                    </Link>
                </div>

                <Search />

                <div className={cx('actions')}>
                    <Button
                        outline_text
                        leftIcon={<FontAwesomeIcon icon={faPlus} />}
                    >
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 100]} content="Message">
                                <button className={cx('action-btn')}>
                                    <img src={images.message} alt="message" />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 150]} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <img src={images.inbox} alt="inbox" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? MENU_USER : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e2108592d674e23b0b7ca9fefe9b20f3~c5_720x720.jpeg?x-expires=1670569200&x-signature=Bl1ef%2BrNMiSXrFz%2BdtPUEWcEs1w%3D"
                                alt="Dinh Tu"
                            />
                        ) : (
                            <button className={cx('menu_icon')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
