import styles from './enter-button.module.css'
import { Link } from 'react-router'


function ButtonParent (props) {

return (
    <>
    <Link to={props.link}>
    <button className={styles.buttonStyle} >
        {props.text}
    </button>
    </Link>
    </>
)
}

export default ButtonParent
