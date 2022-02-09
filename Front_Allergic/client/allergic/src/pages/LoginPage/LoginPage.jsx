import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import LogOut from "../../components/LogOut/LogOut";

import { JwtContext } from "../../shared/contexts/JwtContext";
import { API } from "../../shared/services/api";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const { jwt, setJwt } = useContext(JwtContext);

  const onSubmit = (formData) => {
    API.post("api/users/login", formData).then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
     
      setJwt(res.data.token);
    });
  };

  return (<div>

    <LogOut/>
    

    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        defaultValue="contacto@abelcabezaroman.com"
        {...register("email", { required: true })}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        defaultValue={"ABCedf123"}
        {...register("password", {
          required: true,
        })}
      />

      <input type="submit" value="Login" />
    </form>
      
    

    



    </div>
  );
};

export default LoginPage;
