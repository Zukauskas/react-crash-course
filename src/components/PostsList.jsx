import { useState } from 'react';
import { NewPost } from './NewPost';
import { Post } from './Post';
import styles from './PostsList.module.css';

export function PostsList() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            <Modal>
                <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
            </Modal>
            <ul className={styles.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Morphius" body="You are the chosen One, Neo" />
            </ul>
        </>
    );
}
