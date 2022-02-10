import React, { useEffect, useState } from "react";
import { API } from "../../../shared/services/api";
import AlphabeticalMap from "./AlphabeticalMap/AlphabeticalMap";

const AllergenRegister = ({ props, props2, props3 }) => {
  // console.log(
  //   "estas son las props de contact ",
  //   props.finalInfo,
  //   "esto seria la pagina:",
  //   props2.page
  // );
  const [allergens, setAllergens] = useState([]);
    const [arrayA, setArrayA] = useState([]);
    const [arrayC, setArrayC] = useState([])
    const [arrayF, setArrayF] = useState([])
    const [arrayG, setArrayG] = useState([])
    const [arrayH, setArrayH] = useState([])
    const [arrayK, setArrayK] = useState([])
    const [arrayL, setArrayL] = useState([])
    const [arrayM, setArrayM] = useState([])
    const [arrayN, setArrayN] = useState([])
    const [arrayP, setArrayP] = useState([])
    const [arrayR, setArrayR] = useState([])
    const [arrayS, setArrayS] = useState([])
    const [arrayT, setArrayT] = useState([])
    const [arrayU, setArrayU] = useState([])
    const [arrayV, setArrayV] = useState([])
    const [arrayY, setArrayY] = useState([])


    const allArraysAllergens = (allergens) => {
      const arrayACopy = []
      const arrayCCopy = []
      const arrayFCopy = []
      const arrayGCopy = []
      const arrayHCopy = []
      const arrayKCopy = []
      const arrayLCopy = []
      const arrayMCopy = []
      const arrayNCopy = []
      const arrayPCopy = []
      const arrayRCopy = []
      const arraySCopy = []
      const arrayTCopy = []
      const arrayUCopy = []
      const arrayVCopy = []
      const arrayYCopy = []
      for (let i = 0; i < allergens.length; i++) {
        const allergen = allergens[i];
        if (allergen.name[0] === ("a" || "á")) {
          console.log(allergen)
          
          arrayACopy.push(allergen)

          
          console.log("arrayACopy en A", arrayACopy)
        } else if (allergen.name[0] === "c") {
          arrayCCopy.push(allergen)
        } else if (allergen.name[0] === "f") {
          arrayFCopy.push(allergen)
        } else if (allergen.name[0] === "g") {
          arrayGCopy.push(allergen)
        } else if (allergen.name[0] === "h") {
          arrayHCopy.push(allergen)
        } else if (allergen.name[0] === "k") {
          arrayKCopy.push(allergen)
        } else if (allergen.name[0] === "l") {
          arrayLCopy.push(allergen)
        } else if (allergen.name[0] === "m") {
          arrayMCopy.push(allergen)
        } else if (allergen.name[0] === "n") {
          arrayNCopy.push(allergen)
        } else if (allergen.name[0] === "p") {
          arrayPCopy.push(allergen)
        } else if (allergen.name[0] === "r") {
          arrayRCopy.push(allergen)
        } else if (allergen.name[0] === "s") {
          arraySCopy.push(allergen)
        } else if (allergen.name[0] === "t") {
          arrayTCopy.push(allergen)
        } else if (allergen.name[0] === ("u" || "ú")) {
          arrayUCopy.push(allergen)
        } else if (allergen.name[0] === "v") {
          arrayVCopy.push(allergen)
        } else if (allergen.name[0] === "y") {
          arrayYCopy.push(allergen)
        }
      }setArrayA(arrayACopy)
       setArrayC(arrayCCopy)
       setArrayF(arrayFCopy)
       setArrayG(arrayGCopy)
       setArrayH(arrayHCopy)
       setArrayK(arrayKCopy)
       setArrayL(arrayLCopy)
       setArrayM(arrayMCopy)
       setArrayN(arrayNCopy)
       setArrayP(arrayPCopy)
       setArrayR(arrayRCopy)
       setArrayS(arraySCopy)
       setArrayT(arrayTCopy)
       setArrayU(arrayUCopy)
       setArrayV(arrayVCopy)
       setArrayY(arrayYCopy)
  
      
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
        // a must be equal to b
        return 0;

        

    

      }); 
      setAllergens(allergenslocal);
      allArraysAllergens(allergenslocal)


      
      
      
      
      
    });
  }, []);


  // allergens.map()




// console.log("console log de allergens ", allergens);

  return (
    <div>
      
    
      {/* {console.log("holaaaaaaa arrayA", arrayA)} */}
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
