import React from 'react'
import { useForm } from "react-hook-form";
import { API } from "../../../shared/services/api";

const UserRegister = ({props, props2}) => {
  const { register, handleSubmit } = useForm();
  
  // const onSubmit = (formData) => {
  //   API.post("/api/users/register", formData).then((res) => {
  //     console.log("Register user", res);
  //     console.log("formData =", formData)

  //   });

  // };

  const onSubmit = (formData) =>{
    props.setFinalInfo(formData)
    props2.setPage(2)
    
    
  } 



  

  return (
    <div>


<form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        defaultValue="rick700"
        placeholder="Nombre completo"
        type="name"
        {...register("name", { required: true })}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        defaultValue="rick@700.com"
        placeholder="Dirección e-mail"
        type="email"
        {...register("email", {
          required: true
          
        })}
      />

    <label htmlFor="phone">Phone</label>
      <input
        id="phone"
        defaultValue="7894561"
        placeholder="Móvil"
        type="number"
        {...register("phone", {
          // required: true
          
        })}
      />


      <label htmlFor="password">Password</label>
      <input
        name="password"
        id="password"
        type="password"
        defaultValue="Cortina123*"
        placeholder="Password"
        {...register("password", {
          required: true
          
        })}
      />

      <input type="submit" value="Guardar Perfil" />
    </form>

        


    </div>
  )
}

export default UserRegister