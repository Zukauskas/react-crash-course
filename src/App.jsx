import { PostsList } from './components/PostsList';
import { MainHeader } from './components/MainHeader';
import { useState } from 'react';

export function App() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function modalCloseHandler() {
        setModalIsOpen(false);
    }

    function modalOpenHandler() {
        setModalIsOpen(true);
    }

    return (
        <>
            <MainHeader onCreatePost={modalOpenHandler} />
            <main>
                <PostsList isPosting={modalIsOpen} onStopPosting={modalCloseHandler} />
            </main>
        </>
    );
}
