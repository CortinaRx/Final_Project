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
        defaultValue="Abel Cabeza Román"
        {...register("name", { required: true })}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        defaultValue="contacto@abelcabezaroman.com"
        {...register("email", {
          required: true
          
        })}
      />

      <label htmlFor="password">Password</label>
      <input
        name="password"
        id="password"
        type="password"
        defaultValue="ABCedf123"
        {...register("password", {
          required: true
          
        })}
      />

      <input type="submit" value="Register" />
    </form>
  );
};

export default Register;
