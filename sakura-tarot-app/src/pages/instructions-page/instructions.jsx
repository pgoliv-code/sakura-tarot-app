import ButtonParent from '../../components/enter-button/enter-button'
import FooterComp from '../../components/footer/footer'
import Header from '../../components/header/header'
import PageWelcome from '../welcome-page/welcome'
import styles from './instructions.module.css'

function PageInstructions () {

    return (
        <>
        < Header/>
        <main className={styles.mainSection}>
            <h2 className={styles.instructionsTitle}>Instructions</h2>
            <p>Lorem Ipsum</p>
            <ButtonParent
            text="Ir a Lecturas"
            link="/"
            />
        </main>
        < FooterComp/>
        </>
    )
}

export default PageInstructions