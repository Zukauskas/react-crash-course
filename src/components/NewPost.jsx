import styles from './NewPost.module.css';

export function NewPost() {
    return (
        <form className={styles.form}>
            <p>
                <label htmlFor="author">Author</label>
                <input id="author" type="text" required />
            </p>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" rows={3} required></textarea>
            </p>
        </form>
    );
}
