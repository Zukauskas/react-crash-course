import { useState } from 'react';
import { NewPost } from './NewPost';
import { Post } from './Post';
import { Modal } from './Modal';
import styles from './PostsList.module.css';

export function PostsList() {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function modalCloseHandler() {
        setModalIsOpen(false);
    }

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            {modalIsOpen ? (
                <Modal onClose={modalCloseHandler}>
                    <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
                </Modal>
            ) : null}
            <ul className={styles.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Morphius" body="You are the chosen One, Neo" />
            </ul>
        </>
    );
}
