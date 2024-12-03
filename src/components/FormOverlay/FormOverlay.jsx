import style from './FormOverlay.module.css';
import { useState } from 'react';

export default function FormOverlay({ handleSubmit }) {
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        content: '',
        tags: '',
        published: false,
    });

    function handleFormData(event) {
        let value =
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value;

        setFormData((formData) => ({
            ...formData,
            [event.target.name]: value,
        }));
    }

    function onSubmit(event) {
        event.preventDefault();
        formData.tags = getTagsArray(formData.tags);
        handleSubmit(formData);
    }

    function getTagsArray(string) {
        return string
            .toLowerCase()
            .trim()
            .split(' ')
            .filter((tag) => tag !== '');
    }

    return (
        <>
            <div className={style.Overlay}>
                <form className={style.OverlayBody} onSubmit={onSubmit}>
                    <label>
                        <span>Titolo del Post: </span>
                        <input
                            className={style.Width_100}
                            type="text"
                            onChange={handleFormData}
                            value={formData.title}
                            name="title"
                        />
                    </label>
                    <label>
                        <span>Immagine (Link): </span>
                        <input
                            className={style.Width_100}
                            type="text"
                            onChange={handleFormData}
                            value={formData.image}
                            name="image"
                        />
                    </label>
                    <label>
                        <span>Contenuto: </span>
                        <input
                            className={style.Width_100}
                            type="text"
                            onChange={handleFormData}
                            value={formData.content}
                            name="content"
                        />
                    </label>
                    <label>
                        <span>Tags: </span>
                        <input
                            className={style.Width_100}
                            type="text"
                            onChange={handleFormData}
                            value={formData.tags}
                            name="tags"
                        />
                    </label>
                    <label>
                        <span>Pubblicato: </span>
                        <input
                            type="checkbox"
                            onChange={handleFormData}
                            value={formData.published}
                            name="published"
                        />
                    </label>
                    <button type="submit">Crea Post</button>
                    {/* <Button type={'submit'} value="Crea Post"></Button> */}
                </form>
            </div>
        </>
    );
}
