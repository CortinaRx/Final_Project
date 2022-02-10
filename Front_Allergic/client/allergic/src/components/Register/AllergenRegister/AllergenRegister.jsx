import React, { useEffect, useState } from "react";
import { API } from "../../../shared/services/api";
import AlphabeticalMap from "./AlphabeticalMap/AlphabeticalMap";

const AllergenRegister = ({ props, props2, props3 }) => {
  console.log(
    "estas son las props de contact ",
    props.finalInfo,
    "esto seria la pagina:",
    props2.page
  );

  const [allergens, setAllergens] = useState([]);

  const arrayA = ["hola"];
  const arrayC = [];
  const arrayF = [];
  const arrayG = [];
  const arrayH = [];
  const arrayK = [];
  const arrayL = [];
  const arrayM = [];
  const arrayN = [];
  const arrayP = [];
  const arrayR = [];
  const arrayS = [];
  const arrayT = [];
  const arrayU = [];
  const arrayV = [];
  const arrayY = [];

  const allArraysAllergens = (allergens) => {
    for (let i = 0; i < allergens.length; i++) {
      const allergen = allergens[i];
      if (allergen.name[0] === ("a" || "á")) {
        arrayA.push(allergen);
      } else if (allergen.name[0] === "c") {
        arrayC.push(allergen);
      } else if (allergen.name[0] === "f") {
        arrayF.push(allergen);
      } else if (allergen.name[0] === "g") {
        arrayG.push(allergen);
      } else if (allergen.name[0] === "h") {
        arrayH.push(allergen);
      } else if (allergen.name[0] === "k") {
        arrayK.push(allergen);
      } else if (allergen.name[0] === "l") {
        arrayL.push(allergen);
      } else if (allergen.name[0] === "m") {
        arrayM.push(allergen);
      } else if (allergen.name[0] === "n") {
        arrayN.push(allergen);
      } else if (allergen.name[0] === "p") {
        arrayP.push(allergen);
      } else if (allergen.name[0] === "r") {
        arrayR.push(allergen);
      } else if (allergen.name[0] === "s") {
        arrayS.push(allergen);
      } else if (allergen.name[0] === "t") {
        arrayT.push(allergen);
      } else if (allergen.name[0] === ("u" || "ú")) {
        arrayU.push(allergen);
      } else if (allergen.name[0] === "v") {
        arrayV.push(allergen);
      } else if (allergen.name[0] === "y") {
        arrayY.push(allergen);
      }
    }console.log("sergioaqui", arrayA)

    
  };



  
  
  useEffect(() => {
    console.log("pepeeeeee")
    API.get("/api/allergen").then((res) => {
      const allergenslocal = res.data;
      console.log("sergio22222", res.data)
      // allergenslocal.sort((a, b) => {
      //   if (a.name > b.name) {
      //     return 1;
      //   }
      //   if (a.name < b.name) {
      //     return -1;
      //   }
      //   // a must be equal to b
      //   return 0;

      // });
      console.log("sergiooooo", allergenslocal)
      // allArraysAllergens(allergenslocal);
      setAllergens(allergens);
      
      
    });
  }, []);



  return (
    <div>
      {/* {arrayA.map((array)=>{return <p>{array[0].name}</p>})} */}
      <p>{arrayA}</p>
      {console.log("holaaaaaaa", arrayA)}
      {/* {allergens !== undefined ? <div>
      <AlphabeticalMap allergens={arrayA} />
      <AlphabeticalMap allergens={arrayC} />
      <AlphabeticalMap allergens={arrayF} />
      <AlphabeticalMap allergens={arrayG} />
      <AlphabeticalMap allergens={arrayH} />
      <AlphabeticalMap allergens={arrayK} />
      <AlphabeticalMap allergens={arrayL} />
      <AlphabeticalMap allergens={arrayM} />
      <AlphabeticalMap allergens={arrayN} />
      <AlphabeticalMap allergens={arrayP} />
      <AlphabeticalMap allergens={arrayR} />
      <AlphabeticalMap allergens={arrayS} />
      <AlphabeticalMap allergens={arrayT} />
      <AlphabeticalMap allergens={arrayU} />
      <AlphabeticalMap allergens={arrayV} />
      <AlphabeticalMap allergens={arrayY} />  </div> : <p>tas jodido</p> }
     */}
    </div>
  );
};

export default AllergenRegister;
