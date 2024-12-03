import style from './Button.module.css';

function Button({ onClick = () => {}, value = '', color = '', type = '' }) {
    return (
        <a
            className={`${style.Button} ${style[color]}`}
            href="#"
            onClick={onClick}
            type={type}
        >
            {value}
        </a>
    );
}

export default Button;
