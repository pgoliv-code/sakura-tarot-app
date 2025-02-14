import { useForm } from "react-hook-form";
import styles from './formUseForm.module.css'
import { useNavigate } from "react-router";

function FormUseForm() {
    const {
        register, handleSubmit, formState:{ errors },
    } = useForm({mode: 'onChange'});

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        navigate('/instructions');
    };

    return (
        <>
        <form className={styles.formCard} onSubmit={handleSubmit((onSubmit))}>
            <input className={styles.inputForm} htmlFor="name" type="text" 
                placeholder="Entra tu nombre" {...register("Username", {
                    required: {
                        value: true,
                        message: '❌Mínimo de 1 caracter!❌'
                    },
                    maxLength: {
                        value: 20,
                        message: '❌Máximo de 20 caracteres!❌'
                    },
                    pattern: {
                        value:/[A-Za-z]/,
                        message: '❌Solo se aceptan letras!❌',
                    }})} />
            {errors.Username && <span className={styles.spanError}>{errors.Username.message}</span>}
            <input className={styles.submitButton} type="submit" value={'Registrar'}/>
        </form>
        </>
    )
}

export default FormUseForm

// pattern: {
//     value: /^[a-zA-Z]+$/,
//     message2: '' 
// '/^\d+$/' for numbers
// } const regex = /^[a-zA-Z0-9]+$/;
