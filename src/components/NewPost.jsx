import styles from './NewPost.module.css';

export function NewPost({ onBodyChange, onAuthorChange }) {
    return (
        <form className={styles.form}>
            <p>
                <label htmlFor="author">Author</label>
                <input id="author" type="text" required onChange={onAuthorChange} />
            </p>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" rows={3} required onChange={onBodyChange}></textarea>
            </p>
        </form>
    );
}
