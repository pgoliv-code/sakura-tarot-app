import styles from './welcome.module.css'
import Header from '../../components/header/header'
import EnterButton from '../../components/enter-button/enter-button'

function PageWelcome () {

    return (
        <>
        <main className={styles.mainSection}>
            <h1>Sakura Tarot</h1>
            < EnterButton/>
        </main>
        
        </>
    )
}

export default PageWelcome