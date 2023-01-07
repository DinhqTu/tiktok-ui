import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
// import Typography from '@mui/material/Typography';
const cx = classNames.bind(styles);
function InfoItem({ data }) {
    return (
        // <Typography component={'span'} variant={'body2'}>
        <span>
            <a href="" className={cx('title')}>
                {data.title}
            </a>
        </span>
        // {/* </Typography> */}
    );
}

export default InfoItem;
