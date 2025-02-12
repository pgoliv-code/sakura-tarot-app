import styles from './welcome.module.css'
import sakuraCard from '../../assets/images/Reverso-Sakura.jpg'
import ButtonParent from '../../components/enter-button/enter-button'
import FormWelcome from '../../components/form/form'
// import { Form } from 'react-hook-form'
// import FormWelcome from '../../components/form/form'

function PageWelcome () {

    return (
        <>
        <main className={styles.mainSection}>
            <h1 className={styles.sakuraTitle}>Sakura Tarot</h1>
            <img className={styles.cardImage} src={sakuraCard}/>
            <FormWelcome/>
            < ButtonParent
            text={"Entrar"}
            link="/instructions"
            // action={}
            />
        </main>
        
        </>
    )
}

export default PageWelcome