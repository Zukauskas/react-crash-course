import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Posts, loader as postsLoader } from './routes/Posts';
import { NewPost, action as newPostAction } from './routes/NewPost';
import { PostDetails, loader as postDetailsLoader } from './routes/PostDetails';
import { RootLayout } from './routes/RootLayout';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Posts />,
                loader: postsLoader,
                children: [
                    { path: '/create-post', element: <NewPost />, action: newPostAction },
                    { path: '/:id', element: <PostDetails />, loader: postDetailsLoader },
                ],
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
