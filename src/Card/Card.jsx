import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './styles.module.scss';

export const Card = ({ children, vertical, markdownEnabled }) => (
    <div
        className={`
            ${styles.Card}
            ${vertical ? styles.vertical : ''}
        `}
    >
        { markdownEnabled ? <ReactMarkdown source={children} />: children }
    </div>
);
