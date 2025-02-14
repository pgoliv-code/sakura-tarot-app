import styles from './enter-button.module.css'
import { Link } from 'react-router'


function ButtonParent (props) {

return (
    <>
    <Link to={props.link}>
    <button className={styles.buttonStyle} type={props.type ? props.type : null} onClick={props.action ? props.action() : null}>
        {props.text}
    </button>
    </Link>
    </>
)
}

export default ButtonParent
