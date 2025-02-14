import styles from './welcome.module.css'
import sakuraCard from '../../assets/images/Reverso-Sakura.jpg'
import ButtonParent from '../../components/enter-button/enter-button'
import FormUseForm from '../../components/form-useForm/formUseForm'

function PageWelcome () {
    // const {
    //     register, handleSubmit, formState:{ errors },
    // } = useForm();

    const store = () => {
        let dataInput = data
        localStorage.setItem("Username", dataInput.value);
    }

    return (
        <>
        <main className={styles.mainSection}>
            <h1 className={styles.sakuraTitle}>Sakura Tarot</h1>
            
            <img className={styles.cardImage} src={sakuraCard}/>
            
            <FormUseForm/>

        </main>
        
        </>
    )
}

export default PageWelcome

// export const getFavourites = function () {
//     return JSON.parse(localStorage.getItem("favourites") ?? "{}");
//   };

      // const callLastSaved = () => {
    //     JSON.parse(localStorage.getItem("Username") ?? "{}")
    // }