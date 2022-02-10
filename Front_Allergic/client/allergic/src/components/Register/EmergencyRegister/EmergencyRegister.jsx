import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const EmergencyRegister = ({props, props2}) => {
console.log("esto es finalinfo Emergency", props.finalInfo);
const { register, handleSubmit } = useForm();
const [contact, setContact] = useState({})

const onSubmit = (formData) =>{
 setContact({formData})
  props.setFinalInfo(...props.finalInfo, contact)
  props2.setPage(3)
  
} 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="name">Name</label>
    <input
      id="sosname"
      placeholder="Nombre completo de tu contacto"
      type="text"
      {...register("sosname", { required: false })}
    />

    <label htmlFor="email">Email</label>
    <input
      id="sosemail"
      placeholder="Dirección e-mail"
      type="email"
      {...register("sosemail", {
        required: false
        
      })}
    />

  <label htmlFor="phone">Phone</label>
    <input
      id="sosphone"
      placeholder="Móvil"
      type="number"
      {...register("sosphone", {
        // required: true
        
      })}
    />


    <label htmlFor="assurance">Assurance</label>
    <input
      name="Assurance"
      id="assurance"
      type="text"
      placeholder="Compañia de Seguros / Nº Póliza"
      {...register("assurance", {
        required: true
        
      })}
    />

    <input type="submit" value="Guardar emergencias" />
  </form>
  )
}

export default EmergencyRegister