import style from './FormOverlay.module.css';
import Button from '../Button/Button';

export default function FormOverlay({ title, handleSubmit, setTitle }) {
    return (
        <>
            <div className={style.Overlay}>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Titolo del Post: </span>
                        <input type="text" value={title} onChange={setTitle} />
                    </label>
                    <Button type={'submit'} value="Crea Post"></Button>
                </form>
            </div>
        </>
    );
}
