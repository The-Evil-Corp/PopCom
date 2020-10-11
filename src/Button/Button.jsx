import React from 'react';
import styles from './styles.module.scss';

export const Button = ({
    disabled,
    variant = 'primary',
    children,
}) => (
    <button
        type="button"
        className={`${styles.Button} ${styles[variant]}`}
        disabled={disabled}
    >
        { children }
    </button>
);
