import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { API } from "../../../shared/services/api";
import AlphabeticalMap from "./AlphabeticalMap/AlphabeticalMap";
import './AllergenRegister.scss'

const AllergenRegister = ({ props, props2}) => {
 
  const [allergens, setAllergens] = useState([]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (allergenObject) =>{
    console.log(allergenObject)
    // const hello = formData
    // console.log(hello)
    props.setFinalInfo({...props.finalInfo, allergenObject})
    props2.setPage(4)
    
    
  } 

  useEffect(() => {
    API.get("/api/allergen").then((res) => {
      const allergenslocal = res.data;

      allergenslocal.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      setAllergens(allergenslocal);
    });
  }, []);



  return (
    <div>
      {allergens.length > 0 && (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AlphabeticalMap allergens={allergens} letter={"A"} register={register} />
          <AlphabeticalMap allergens={allergens} letter={"C"} register={register}/>
          <AlphabeticalMap allergens={allergens} letter={"F"} register={register}/>
          <AlphabeticalMap allergens={allergens} letter={"G"} register={register}/>
          <AlphabeticalMap allergens={allergens} letter={"H"} register={register}/>
          <AlphabeticalMap allergens={allergens} letter={"K"} register={register}/>
          <AlphabeticalMap allergens={allergens} letter={"L"} register={register}/>
          <AlphabeticalMap allergens={allergens} letter={"M"} register={register}/>
          <AlphabeticalMap allergens={allergens} letter={"N"} register={register}/>
          <AlphabeticalMap allergens={allergens} letter={"P"} register={register}/>
          <AlphabeticalMap allergens={allergens} letter={"R"} register={register}/>
          <AlphabeticalMap allergens={allergens} letter={"S"} register={register}/>
          <AlphabeticalMap allergens={allergens} letter={"T"} register={register}/>
          <AlphabeticalMap allergens={allergens} letter={"U"} register={register}/>
          <AlphabeticalMap allergens={allergens} letter={"V"} register={register}/>
          <AlphabeticalMap allergens={allergens} letter={"Y"} register={register}/>
          <input type="submit" value="Guardar" />
          </form>
        </div>
      )}
    </div>
  );
};

export default AllergenRegister;
