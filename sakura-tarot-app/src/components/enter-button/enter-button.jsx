import styles from './enter-button.module.css'
import { Link } from 'react-router'

function EnterButton () {

return (
    <>
    <Link to="/instructions">
    <button className={styles.buttonStyle}>
    Enter
    </button>
    </Link>
    </>
)

}

export default EnterButton
