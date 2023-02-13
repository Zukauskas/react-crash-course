import { useLoaderData } from 'react-router-dom';
import { Post } from './Post';
import styles from './PostsList.module.css';

export function PostsList() {
    const posts = useLoaderData();

    return (
        <>
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
