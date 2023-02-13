import { Link } from 'react-router-dom';
import { MdPostAdd, MdMessage } from 'react-icons/md';

import styles from './MainHeader.module.css';

export function MainHeader() {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <MdMessage />
                React Message Board
            </h1>
            <p>
                <Link to="/create-post" className={styles.button}>
                    <MdPostAdd size={18} />
                    New Post
                </Link>
            </p>
        </header>
    );
}
