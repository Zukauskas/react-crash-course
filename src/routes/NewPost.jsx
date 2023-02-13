import { Modal } from '../components/Modal';
import styles from './NewPost.module.css';
import { Link, Form, redirect } from 'react-router-dom';

export function NewPost() {
    return (
        <Modal>
            <Form method="post" className={styles.form}>
                <div>
                    <label htmlFor="author">Author</label>
                    <input id="author" type="text" name="author" required />
                </div>
                <div>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" rows={3} required></textarea>
                </div>

                <div className={styles.actions}>
                    <Link to=".." className={styles.button} type="button">
                        Cancel
                    </Link>
                    <button className={styles.button} type="submit">
                        Add Post
                    </button>
                </div>
            </Form>
        </Modal>
    );
}

export async function action({ request }) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return redirect('/');
}
