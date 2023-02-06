import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import {
    Icon_Apple,
    Icon_fb,
    Icon_gg,
    Icon_ig,
    Icon_kktalk,
    Icon_line,
    Icon_QRcode,
    Icon_tw,
    Icon_User,
    Icon_ChevronDown,
} from '../Icons';
import styles from './ModalForm.module.scss';
import { ModalContext } from '../ModalProvider';

const cx = classNames.bind(styles);

const LOGIN_REGISTER_LIST = [
    {
        type: 'login',
        title: 'Đăng nhập TikTok',
        contents: [
            {
                icon: <Icon_QRcode />,
                title: 'Sử dụng mã QR code',
            },
            {
                icon: <Icon_User />,
                title: 'Số điện thoại / Email / Tiktok ID',
            },
            {
                icon: <Icon_fb />,
                title: 'Tiếp tục với Facebook',
            },
            {
                icon: <Icon_gg />,
                title: 'Tiếp tục với Google',
            },
            {
                icon: <Icon_tw />,
                title: 'Tiếp tục với Twitter',
            },
            {
                icon: <Icon_line />,
                title: 'Tiếp tục với LINE',
            },
            {
                icon: <Icon_kktalk />,
                title: 'Tiếp tục với KaKaoTalk',
            },
            {
                icon: <Icon_Apple />,
                title: 'Tiếp tục với Apple',
            },
            {
                icon: <Icon_ig />,
                title: 'Tiếp tục với Instagram',
            },
        ],
    },
    {
        type: 'register',
        title: 'Đăng ký TikTok',
        more_register: true,
        contents: [
            {
                icon: <Icon_User />,
                title: 'Số điện thoại / Email / Tiktok ID',
            },
            {
                icon: <Icon_fb />,
                title: 'Tiếp tục với Facebook',
            },
            {
                icon: <Icon_gg />,
                title: 'Tiếp tục với Google',
            },
        ],
    },
    {
        type: 'expand_register',
        title: 'Đăng ký TikTok',
        contents: [
            {
                icon: <Icon_User />,
                title: 'Số điện thoại / Email / Tiktok ID',
            },
            {
                icon: <Icon_fb />,
                title: 'Tiếp tục với Facebook',
            },
            {
                icon: <Icon_gg />,
                title: 'Tiếp tục với Google',
            },
            {
                icon: <Icon_tw />,
                title: 'Tiếp tục với Twitter',
            },
            {
                icon: <Icon_line />,
                title: 'Tiếp tục với LINE',
            },
            {
                icon: <Icon_kktalk />,
                title: 'Tiếp tục với KaKaoTalk',
            },
        ],
    },
];

function ModalForm() {
    const context = useContext(ModalContext);
    const [typeOfForm, setTypeOfForm] = useState('login');
    const [dataForm, setDataForm] = useState([]);
    useEffect(() => {
        const resetDataForm = LOGIN_REGISTER_LIST.find(
            (form) => form.type === typeOfForm,
        );
        setDataForm(resetDataForm);     
    }, [typeOfForm]);

    const handleChangeTypeFormRegister = () => {
        setTypeOfForm('register');
    };

    const handleChangeTypeFormLogin = () => {
        setTypeOfForm('login');
    };

    const handleChangeTypeFormExpandRegister = () => {
        setTypeOfForm('expand_register');
    };

    return (
        <div className={cx('modal_mask')}>
            <div className={cx('modal_wrapper')}>
                <div
                    className={cx('modal_close')}
                    onClick={context.handleHideModal}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className={cx('modal_container')}>
                    <div className={cx('modal_inner')}>
                        <h3 className={cx('modal_title')}>{dataForm.title}</h3>

                        <div className={cx('modal_items')}>
                            {dataForm.contents?.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={cx('modal_item')}
                                    >
                                        <Button
                                            className={cx('btn_login')}
                                            outline_text
                                        >
                                            <span className={cx('icon_social')}>
                                                {item.icon}
                                            </span>
                                            <span className={cx('btn_text')}>
                                                {item.title}
                                            </span>
                                        </Button>
                                    </div>
                                );
                            })}
                        </div>
                        {dataForm.more_register && (
                            <span className={cx('btn_more_register')}>
                                <span
                                    onClick={handleChangeTypeFormExpandRegister}
                                >
                                    <Icon_ChevronDown />
                                </span>
                            </span>
                        )}
                        {dataForm.title?.startsWith('Đăng ký TikTok') && (
                            <span className={cx('container_footer')}>
                                <p className={cx('text_footer')}>
                                    Bằng cách tiếp tục, bạn đồng ý với{' '}
                                    <a href="" className={cx('link')}>
                                        Điều khoản Sử dụng
                                    </a>{' '}
                                    của TikTok và xác nhận rằng bạn đã đọc hiểu
                                    <a href="" className={cx('link')}>
                                        {' '}
                                        Chính sách Quyền riêng tư
                                    </a>{' '}
                                    của TikTok
                                </p>
                            </span>
                        )}
                    </div>
                </div>
                <div className={cx('modal_footer')}>
                    <span className={cx('footer_text')}>
                        {dataForm.type?.startsWith('login') ? (
                            <p>
                                Bạn không có tài khoản?
                                <Link to={'/'}>
                                    <span
                                        className={cx('login')}
                                        onClick={handleChangeTypeFormRegister}
                                    >
                                        Đăng ký
                                    </span>
                                </Link>
                            </p>
                        ) : (
                            <p>
                                Bạn đã có tài khoản?
                                <Link to={'/'}>
                                    <span
                                        className={cx('login')}
                                        onClick={handleChangeTypeFormLogin}
                                    >
                                        Đăng nhập
                                    </span>
                                </Link>
                            </p>
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ModalForm;
