import React from 'react'
import styles from './form.module.css'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

function FormWelcome () {

const schema = yup.object().shape({
    name: yup.string().required(),
})

const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
});

const onSubmit = (data) => {
    console.log(data)
}

    return (
    <>
    <form className={styles.formCard} onSubmit={handleSubmit(onSubmit)}>
        <input className={styles.formInput} type='text' placeholder='Nombre' {...register("name")}/>
        <button onClick={onSubmit}>submit</button>
    </form>
    </>
    )
}

export default FormWelcome


// import { data } from 'react-router';

// const { register, formState: { errors }, handleSubmit} = useForm({
//     mode: 'onSubmit'
// });

// const submitData = data => {
//     let inputData = data;
//     inputData;
//     console.log(inputData);}

//funcion para guardar la variable - BUSCAR LOCAL STORAGE
// const setValueToName = () => {
//     setValue('nombre')
// }

// defaultValue="Nombre" {...register("nombre", {
//     required: true,
//     minLength: 1,
//     maxLength: 30,
// })} type="text" placeholder='Entrar su nombre'>
// { errors.name && <span className={styles.spanError}>El nombre debe tener un mínimo de 1 caracter y máximo de 30</span>}



// import React, { useRef } from 'react'

// function FormCard () {
//     const data = useRef()
//     return (
//         <>
//         </>
//     )
// }

// export default FormCard
