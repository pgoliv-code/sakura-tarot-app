import styles from './welcome.module.css'
import Header from '../../components/header/header'

function PageWelcome () {

    return (
        <>
        < Header/>
        <main className={styles.mainSection}>
            <h1>Sakura Tarot</h1>
        </main>
        </>
    )
}

export default PageWelcome