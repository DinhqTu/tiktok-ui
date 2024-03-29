import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultfn = () => {};

function Menu({
    children,
    items = [],
    hideOnClick = false,
    onChange = { defaultfn },
}) {
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

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            // visible
            interactive
            delay={[0, 300]}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('wrapper-item')}>
                        {history.length > 1 && (
                            <Header title={current.title} onBack={handleBack} />
                        )}
                        <div className={cx('scroll-menu')}>
                            {/* {' '} */}
                            {renderItems()}
                        </div>
                    </PopperWrapper>
                </div>
            )}
            // sau khi click ra khỏi menu, menu sẽ reset về parent
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
