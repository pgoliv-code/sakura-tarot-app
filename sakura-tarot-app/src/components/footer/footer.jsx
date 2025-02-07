import styles from './footer.module.css'

function FooterComp () {
    return (
        <>
        <footer className={styles.footerStyle}>
            <p>Instructions</p>
            <p>Readings</p>
            <p>Saved Readings</p>
        </footer>
        </>
    )
}

export default FooterComp