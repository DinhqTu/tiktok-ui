import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultfn = () => {};

function Menu({ children, items = [], onChange = { defaultfn } }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            const classes = cx('item', { separate: item.separate });
            return (
                <Button
                    className={classes}
                    key={index}
                    to={item.to}
                    leftIcon={item.icon}
                    rightIcon={item.iconRight}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                >
                    {item.title}
                </Button>
            );
        });
    };

    return (
        <Tippy
            // visible
            interactive
            delay={[0, 300]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('wrapper-item')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) =>
                                        prev.slice(0, prev.length - 1),
                                    );
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            // sau khi click ra khỏi menu, menu sẽ reset về parent
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
