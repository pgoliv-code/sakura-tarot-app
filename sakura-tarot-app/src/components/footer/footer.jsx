import { Link } from 'react-router'
import styles from './footer.module.css'

function FooterComp () {
    return (
        <>
        <footer className={styles.footerStyle}>
            <Link to={"/instructions"}>
            <p>Instructions</p>
            </Link>

            <Link to={'/readings'}>
            <p>Readings</p>
            </Link>
            
            <Link to={'/savedReadings'}>
            <p>Saved Readings</p>
            </Link>

        </footer>
        </>
    )
}

export default FooterComp