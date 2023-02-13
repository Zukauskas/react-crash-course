import { PostsList } from '../components/PostsList';
import { Outlet } from 'react-router-dom';

export function Posts() {
    return (
        <>
            <Outlet />
            <main>
                <PostsList />
            </main>
        </>
    );
}

export async function loader() {
    const response = await fetch('http://localhost:8080/posts');
    const resData = await response.json();
    return resData.posts;
}
