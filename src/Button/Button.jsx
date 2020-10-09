import React from 'react';
import styles from './styles.module.scss';

export const Button = ({ text }) => (
    <button
        type="button"
        className={styles.Button}
    >
        { text }
    </button>
);
