import React from 'react';
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";


export default function FormUser () {
    const { register, handleSubmit } = useForm();

    const onSubmit = formData => {
        API.post('register', formData).then(res => {
            console.log('Register user',);
        })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* register your input into the hook by invoking the "register" function */}
            <label htmlFor="name">Nombre</label>
            <input id="name" defaultValue="tu nombre"
                   {...register("name", { required: true })}/>

            {/*<input name="role" id="role" defaultValue="admin"*/}
            {/*       ref={register({ required: true })}/>*/}

            <label htmlFor="email">Email</label>
            <input id="email" defaultValue="usuario@email.com"
                   {...register("email", { required: true  })}/>

            {/*<label htmlFor="username">Username</label>*/}
            {/*<input name="username" id="username" defaultValue="abelcabezaroman"*/}
            {/*       ref={register({ required: true, minLength: 4 })}/>*/}

            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor="password">Password</label>
            <input name="password" id="password" type="password" defaultValue="Jf12345!"
                   {...register("password", {
                       required: true,
                       pattern: /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*_=+-]).{8,12}$/
                   })}/>
            {/* errors will return when field validation fails  */}
            {/*{errors.exampleRequired && <span>This field is required</span>}*/}

            <input type="submit" value="Register"/>
        </form>
    )
}