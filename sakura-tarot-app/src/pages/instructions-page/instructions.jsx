import FooterComp from '../../components/footer/footer'
import Header from '../../components/header/header'
import styles from './instructions.module.css'

function PageInstructions () {

    return (
        <>
        < Header/>
        <main className={styles.mainSection}>
            <h2 className={styles.instructionsTitle}>Instructions</h2>
            <p>Lorem Ipsum</p>
        </main>
        < FooterComp/>
        </>
    )
}

export default PageInstructions