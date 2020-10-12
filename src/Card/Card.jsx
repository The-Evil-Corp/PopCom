import React from 'react';
import styles from './styles.module.scss';

export const Card = ({ children, vertical }) => (
    <div
        className={`
            ${styles.Card}
            ${vertical ? styles.vertical : ''}
        `}
    >
        { children }
    </div>
);
