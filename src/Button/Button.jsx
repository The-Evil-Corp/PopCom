import styles from './styles.module.scss';

export const Button = ({ text }) => (
    <button className={styles.Button}>
        { text }
    </button>
);