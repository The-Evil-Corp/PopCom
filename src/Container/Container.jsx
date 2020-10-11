import React from 'react';
import styles from './styles.module.scss';

export const Container = ({
    children,
    theme = 'default',
    horizontal,
}) => (
    <div className={`theme-${theme}`}>
        <div
            className={`
            ${styles.Container}
            ${horizontal ? styles.horizontal : ''}
        `}
        >
            { children }
        </div>
    </div>
);
