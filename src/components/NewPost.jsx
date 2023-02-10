import styles from './NewPost.module.css';
import { useState } from 'react';

export function NewPost({ onCancel, onAddPost }) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();

        const postData = {
            body: enteredBody,
            author: enteredAuthor,
        };

        onAddPost(postData);
        onCancel();
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div>
                <label htmlFor="author">Author</label>
                <input id="author" type="text" required onChange={authorChangeHandler} />
            </div>
            <div>
                <label htmlFor="body">Text</label>
                <textarea id="body" rows={3} required onChange={bodyChangeHandler}></textarea>
            </div>

            <div className={styles.actions}>
                <button className={styles.button} type="button" onClick={onCancel}>
                    Cancel
                </button>
                <button className={styles.button} type="submit">
                    Add Post
                </button>
            </div>
        </form>
    );
}
