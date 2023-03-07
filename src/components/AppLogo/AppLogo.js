import React from 'react';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import classNames from 'classnames/bind';
import styles from './AppLogo.module.scss';

const cx = classNames.bind(styles);

function AppLogo({ className }) {
    const classes = cx(className, 'inline-flex items-center space-x-2 text-3xl text-blue-500 font-semibold');
    return (
        <a href="/" className={classes}>
            <HiOutlineDocumentDuplicate />
            <h1>angelcv</h1>
        </a>
    );
}

export default AppLogo;
