import React from "react";

import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    API.post("/api/users/register", formData).then((res) => {
      console.log("Register user", res);
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        placeholder="Nombre completo"
        type="name"
        {...register("name", { required: true })}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        placeholder="Dirección e-mail"
        type="email"
        {...register("email", {
          required: true
          
        })}
      />

    <label htmlFor="phone">Phone</label>
      <input
        id="phone"
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
        placeholder="Password"
        {...register("password", {
          required: true
          
        })}
      />

      <input type="submit" value="Register" />
    </form>
  );
};

export default Register;
