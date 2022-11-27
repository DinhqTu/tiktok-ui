import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';
import images from '~/assets/image';

function Image({ alt, src, className, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleFallback = () => {
        setFallback(images.no_image);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            ref={ref}
            {...props}
            onError={handleFallback}
        />
    );
}

export default forwardRef(Image);
