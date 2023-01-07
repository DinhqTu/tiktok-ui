import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import InfoItem from './InfoItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);
const INFO_HEADER = [
    {
        id: 1,
        title: 'Giới thiệu',
    },
    {
        id: 2,
        title: 'Bảng tin',
    },
    {
        id: 3,
        title: 'Liên hệ',
    },
    {
        id: 4,
        title: 'Sự nghiệp',
    },
    {
        id: 5,
        title: 'ByteDance',
    },
];

const INFO_BODY = [
    {
        id: 1,
        title: 'Tiktok for Good',
    },
    {
        id: 2,
        title: 'Quảng cáo',
    },
    {
        id: 3,
        title: 'Developers',
    },
    {
        id: 4,
        title: 'Tranparency',
    },
    {
        id: 5,
        title: 'Tiktok Rewards',
    },
    {
        id: 6,
        title: 'TikTok Browse',
    },
    {
        id: 7,
        title: 'TikTok Embeds',
    },
];

const INFO_BOTTOM = [
    {
        id: 1,
        title: 'Trợ giúp',
    },
    {
        id: 2,
        title: 'An toàn',
    },
    {
        id: 3,
        title: 'Điều khoản',
    },
    {
        id: 4,
        title: 'Quyền riêng tư',
    },
    {
        id: 5,
        title: 'Creator Portal',
    },
    {
        id: 6,
        title: 'Hướng dẫn Cộng đồng',
    },
];

function Footer() {
    return (
        <div className={cx('wrapper')}>
            {INFO_HEADER.map((item) => (
                <InfoItem key={item.id} data={item} />
            ))}
            <div className={cx('info-body')}>
                {INFO_BODY.map((item) => (
                    <InfoItem key={item.id} data={item} />
                ))}
            </div>
            <div className={cx('info-bottom')}>
                {INFO_BOTTOM.map((item) => (
                    <InfoItem key={item.id} data={item} />
                ))}
            </div>

            <div>
                <HeadlessTippy
                    // visible
                    interactive
                    offset={[-80, 10]}
                    placement="bottom"
                    render={(props) => (
                        <div className={cx('notifi')} tabIndex="-1" {...props}>
                            <PopperWrapper>
                                <p className={cx('text-notifi')}>
                                    NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK
                                </p>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('more')}>Thêm</div>
                </HeadlessTippy>
            </div>
            <div className={cx('year')}>@ 2023 Tiktok</div>
        </div>
    );
}

export default Footer;
