import { MdPostAdd, MdMessage } from 'react-icons/md';

import styles from './MainHeader.module.css';

export function MainHeader({ onCreatePost }) {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <MdMessage />
                React Poster
            </h1>
            <p>
                <button className={styles.button} onClick={onCreatePost}>
                    <MdPostAdd size={18} />
                    New Post
                </button>
            </p>
        </header>
    );
}
