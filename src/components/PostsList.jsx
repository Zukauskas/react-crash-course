import { useState } from 'react';
import { NewPost } from './NewPost';
import { Post } from './Post';
import { Modal } from './Modal';
import styles from './PostsList.module.css';

export function PostsList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
                </Modal>
            )}
            {posts.length > 0 && (
                <ul className={styles.posts}>
                    {posts.map((post) => (
                        <Post key={post.body} author={post.author} body={post.body} />
                    ))}
                </ul>
            )}
            {posts.length === 0 && (
                <div className={styles.noPosts}>
                    <h2>No posts yet!</h2>
                    <p>Be the first to post something!</p>
                </div>
            )}
        </>
    );
}
