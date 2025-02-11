import styles from './welcome.module.css'
import sakuraCard from '../../assets/images/Reverso-Sakura.jpg'
import ButtonParent from '../../components/enter-button/enter-button'

function PageWelcome () {

    return (
        <>
        <main className={styles.mainSection}>
            <h1 className={styles.sakuraTitle}>Sakura Tarot</h1>
            <img className={styles.cardImage} src={sakuraCard}/>
            < ButtonParent
            text={"Entrar"}
            link="/instructions"
            />
        </main>
        
        </>
    )
}

export default PageWelcome