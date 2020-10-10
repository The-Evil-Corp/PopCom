import React from 'react';
import styles from './styles.module.scss';

export const Button = ({ text, disabled }) => (
    <button
        type="button"
        className={styles.Button}
        disabled={disabled}
    >
        { text }
    </button>
);
