import styles from './header.module.css'

function Header () {
    return (
        <header className={styles.headerStyle}>
            <div className={styles.headerLeft}>
                <p>Sakura Tarot</p>
            </div>
            <div className={styles.headerRight}>
                <p>Salir</p>
            </div>
        </header>
    )
}

export default Header