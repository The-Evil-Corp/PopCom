import React from 'react';
import styles from './styles.module.scss';

export const Button = ({
    text,
    disabled,
    variant = 'primary',
}) => (
    <button
        type="button"
        className={`${styles.Button} ${styles[variant]}`}
        disabled={disabled}
    >
        { text }
    </button>
);
