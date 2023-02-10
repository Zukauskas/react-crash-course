import { Post } from './components/Post';

export function App() {
    return (
        <main>
            <Post author="Tautvydas" body="React.js is awesome!" />
            <Post author="Anonymous" body="We are legion" />
            <Post author="Hagrid" body="Your're a wizard, Harry" />
            <Post author="Morphius" body="You are the chosen One, Neo" />
        </main>
    );
}
