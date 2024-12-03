import './App.css';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import posts from './data/posts';
import Button from './components/Button/Button';
import FormOverlay from './components/FormOverlay/FormOverlay';
import { useState, useEffect } from 'react';

function App() {
    const [drawnPosts, setPosts] = useState(posts);
    const [showOverlay, setShowOverlay] = useState(false);
    const [postName, setPostName] = useState('');
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const newTags = [];
        drawnPosts.forEach((post) => {
            if (post.published) {
                post.tags.forEach((tag) => {
                    !newTags.includes(tag) && newTags.push(tag);
                });
            }
        });
        setTags(newTags);
    }, [drawnPosts]);

    useEffect(() => {
        if (showOverlay) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [showOverlay]);

    const handleSubmit = (formData) => {
        const newPost = {
            id: drawnPosts.length + 1,
            ...formData,
        };

        setPosts([...drawnPosts, newPost]);
        setShowOverlay(false);
    };

    const handleDelete = (id) => {
        const updatedPosts = drawnPosts.filter((post) => post.id !== id);
        setPosts([...updatedPosts]);
    };

    const handleOverlay = () => {
        setShowOverlay(true);
    };

    const changePostName = (e) => {
        setPostName(e.target.value);
    };

    return (
        <>
            <main>
                {showOverlay && (
                    <FormOverlay
                        title={postName}
                        handleSubmit={handleSubmit}
                        setTitle={changePostName}
                    />
                )}
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
                            <Button
                                value={'Crea Post'}
                                onClick={handleOverlay}
                            ></Button>
                        </div>
                        {drawnPosts.map((post) => {
                            return (
                                post.published && (
                                    <div key={post.id} className="col-6">
                                        <Card
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
