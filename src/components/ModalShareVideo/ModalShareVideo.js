import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import {
    Icon_ChevronDown,
    Icon_Copy_Link,
    Icon_Email,
    Icon_fb,
    Icon_Get_Link,
    Icon_line,
    Icon_LinkedIn,
    Icon_Pinterest,
    Icon_Reddit,
    Icon_Send_Friend,
    Icon_Telegram,
    Icon_tw,
    Icon_WhatsApp,
} from '../Icons';
import { Wrapper } from '../Popper';
import styles from './ModalShareVideo.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const SHARE_SOCIAL_LIST = [
    {
        type: 'share',
        more_social: true,
        content: [
            {
                icon: <Icon_Get_Link />,
                title: 'Nhúng',
            },
            {
                icon: <Icon_Send_Friend />,
                title: 'Gửi đến bạn bè',
            },
            {
                icon: <Icon_fb />,
                title: 'Chia sẻ với Facebook',
            },
            {
                icon: <Icon_WhatsApp />,
                title: 'Chia sẻ với WhatsApp',
            },
            {
                icon: <Icon_Copy_Link />,
                title: 'Sao chép liên kết',
            },
        ],
    },
    {
        type: 'expand_share',
        content: [
            {
                icon: <Icon_Get_Link />,
                title: 'Nhúng',
            },
            {
                icon: <Icon_Send_Friend />,
                title: 'Gửi đến bạn bè',
            },
            {
                icon: <Icon_fb />,
                title: 'Chia sẻ với Facebook',
            },
            {
                icon: <Icon_WhatsApp />,
                title: 'Chia sẻ với WhatsApp',
            },
            {
                icon: <Icon_Copy_Link />,
                title: 'Sao chép liên kết',
            },
            {
                icon: <Icon_tw />,
                title: 'Chia sẻ với Twitter',
            },
            {
                icon: <Icon_LinkedIn />,
                title: 'Chia sẻ với LinkedIn',
            },
            {
                icon: <Icon_Reddit />,
                title: 'Chia sẻ với Reddit',
            },
            {
                icon: <Icon_Telegram />,
                title: 'Chia sẻ với Telegram',
            },
            {
                icon: <Icon_Email />,
                title: 'Chia sẻ với Email',
            },
            {
                icon: <Icon_line />,
                title: 'Chia sẻ với Line',
            },
            {
                icon: <Icon_Pinterest />,
                title: 'Chia sẻ với Pinterest',
            },
        ],
    },
];

function ModalShareVideo({ children }) {
    const [type, setType] = useState('share');
    const [data, setData] = useState([]);

    useEffect(() => {
        const result = SHARE_SOCIAL_LIST.find((data) => data.type === type);
        setData(result);
    }, [type]);

    const handleExpandSocial = () => {
        setType('expand_share');
    };

    return (
        <HeadlessTippy
            // visible
            interactive
            offset={[90, 25]}
            onHide={() => {
                setType('share');
            }}
            duration={[300, 300]}
            render={(props) => (
                <div className={cx('')} tabIndex="-1" {...props}>
                    <div>
                        <Wrapper className={cx('wrapper')}>
                            {data.content?.map((data, index) => {
                                return (
                                    <div key={index} className={cx('item')}>
                                        <Link to>
                                            <span className={cx('icon')}>
                                                {data.icon}
                                            </span>
                                        </Link>
                                        <span className={cx('title')}>
                                            {data.title}
                                        </span>
                                    </div>
                                );
                            })}

                            {data.more_social && (
                                <div
                                    className={cx('wrapper_expand')}
                                    onClick={handleExpandSocial}
                                >
                                    <Icon_ChevronDown
                                        className={cx('btn_expand')}
                                    />
                                </div>
                            )}
                        </Wrapper>
                    </div>
                </div>
            )}
        >
            {children}
        </HeadlessTippy>
    );
}

export default ModalShareVideo;
