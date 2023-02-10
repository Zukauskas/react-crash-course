import { NewPost } from './NewPost';
import { Post } from './Post';
import styles from './PostsList.module.css';

export function PostsList() {
    return (
        <>
            <NewPost />
            <ul className={styles.posts}>
                <Post author="Tautvydas" body="React.js is awesome!" />
                <Post author="Morphius" body="You are the chosen One, Neo" />
            </ul>
        </>
    );
}
