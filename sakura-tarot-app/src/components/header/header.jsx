import { Link } from 'react-router'
import styles from './header.module.css'

function Header () {
    return (
        <header className={styles.headerStyle}>
            <div className={styles.headerLeft}>
                <p>Sakura Tarot</p>
            </div>
            <div className={styles.headerRight}>
                <Link to="/">
                <p className={styles.linkExit}>Salir</p>
                </Link>
            </div>
        </header>
    )
}

export default Header