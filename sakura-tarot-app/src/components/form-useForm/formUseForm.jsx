import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import styles from './formUseForm.module.css'
import { useNavigate } from "react-router";

function FormUseForm() {

    const {
        register, handleSubmit, getValues, formState:{ errors },
    } = useForm({mode: 'onChange'});

    const navigate = useNavigate();

    // const [username, setUsername] = useState('');
    
    // useEffect(() => {
    //     localStorage.setItem('username', JSON.stringify(username))
    // }, [username]);

    const usePersistForm = ({
        value,
        localStorageKey,
    }) => {
        useEffect(() => {
            localStorage.setItem(localStorageKey, value);
        }, [value, localStorageKey]);
        return;
    };
    
    const onSubmit = (data) => {
        console.log(data);
        
        navigate('/instructions');
    };
    
    usePersistForm({ value: getValues().Username, localStorageKey: "username"});

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


// onChange={(e) => setUsername(e.target.value)} required

// onChange={(event) => setUsername(event.target.username)}
// username={username}

// pattern: {
//     value: /^[a-zA-Z]+$/,
//     message2: '' 
// '/^\d+$/' for numbers
// } const regex = /^[a-zA-Z0-9]+$/;

// useUsername(initialValue) {
//     const localData = localStorage.getItem("Username");
//     const [Username, setUsername] = useState(localData?JSON.parse(localData) : initialValue);
//     const setAUsername = (data) => {
//         setUsername(data)
//         localStorage.setItem(JSON.stringify(data))
// };

// hydrate(){
//     const data = localStorage.getItem("Username")
//     setUsername(JSON.parse(data))
// }
// }


// const [data, setData] = useState();

//     }


    // useEffect(() => {
    // localStorage.setItem('Username', JSON.stringify(data))
    // }, [data]);