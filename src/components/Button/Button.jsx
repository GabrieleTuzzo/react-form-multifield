import style from './Button.module.css';

function Button(props) {
    return (
        <a
            className={`${style.Button} ${style[props.color]}`}
            href="#"
            onClick={props.onClick}
        >
            {props.value}
        </a>
    );
}

export default Button;
