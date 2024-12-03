import './App.css';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import posts from './data/posts';
import { useState } from 'react';

function App() {
    const [drawnPosts, setPosts] = useState(posts);
    const [postName, setPostName] = useState('');

    const tags = [];
    const publishedPosts = drawnPosts.filter((post) => post.published === true);
    publishedPosts.forEach((post) => {
        post.tags.forEach((tag) => {
            !tags.includes(tag) && tags.push(tag);
        });
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = {
            id: drawnPosts.length + 1,
            title: postName,
            published: true,
            tags: [],
            image: '',
            content: '',
        };

        setPosts([...drawnPosts, newPost]);
    };

    const handleDelete = (id) => {
        const updatedPosts = drawnPosts.filter((post) => post.id !== id);
        setPosts([...updatedPosts]);
    };

    return (
        <>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="main-title">Il mio blog</h1>
                        </div>
                        <div className="col main-tags-wrap">
                            <div className="tags-container">
                                {tags.map((tag, i) => {
                                    return <span key={i}>{tag}</span>;
                                })}
                            </div>
                            <form
                                onSubmit={
                                    postName !== ''
                                        ? handleSubmit
                                        : function () {}
                                }
                            >
                                <input
                                    type="text"
                                    placeholder={'Titolo post...'}
                                    onChange={(e) => {
                                        setPostName(e.target.value);
                                    }}
                                />
                                <button>Invia</button>
                            </form>
                        </div>
                        {drawnPosts.map((post) => {
                            return (
                                post.published && (
                                    <div className="col-6">
                                        <Card
                                            key={post.id}
                                            title={post.title}
                                            image={post.image}
                                            content={post.content}
                                            tags={post.tags}
                                            published={post.published}
                                            callback={() =>
                                                handleDelete(post.id)
                                            }
                                        ></Card>
                                    </div>
                                )
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
