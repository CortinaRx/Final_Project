import React, { useEffect, useState } from 'react'
import { API } from '../../../shared/services/api'

const SubmitUserRegister = ({ props, props2 }) => {

  console.log(props.finalInfo)
  const [allergensGET, setAllergensGET]=useState([])
 
  let finalInfoRegister={
    name:'',
    email:'',
    phone:'',
    password:'',
    contact:{
      sosname:'',
      sosemail:'',
      sospassword:'',
      assurance:'',
    },
  //  allergen=[]
   
  }
 
  




  useEffect(() => {
    API.get('api/allergen').then((res)=>{
      setAllergensGET(res.data);
    })

   
    

  },[])

  const allergensFinded=[]

  //En este componente se realiza una petición a la API para traer el array de alergenos
  //de forma que ya el usuario ha seleccionado previamente sus alergías y las hemos
  //traido por props.finalInfo.
  //Después, se realiza un IF en la linea27 por si el usuario no elige ninguna alergía
  //previamente.
  //Dentro de la condición, se realiza un FOR para recorrer todas las alergías elegidas
  //por el usuario y concatena otro FOR para recorrer todas las alergías que hay
  //en la base de datos.
  //Y en el caso que coincidan lo guarda al array creado allergensFinded[].
  //Una vez realizado esto, se procede a ejecutar este array en el return de la función.
  //En el return se hace un mapeo para pintar las alergías del usuario.
  
  if(allergensGET.length>0 && props.finalInfo.allergenObject.allergens!=false){
    

    for(let i=0;i<props.finalInfo.allergenObject.allergens.length;i++){
      let allergenElected=props.finalInfo.allergenObject.allergens[i];
      
      for(let j=0;j<allergensGET.length;j++){
        let allergenGET=allergensGET[j]

        if(allergenGET._id===allergenElected){
          allergensFinded.push(allergenGET)
        }
      }
    }

  }

  
  
  finalInfoRegister.name=props.finalInfo.name;
  finalInfoRegister.email=props.finalInfo.email;
  finalInfoRegister.phone=props.finalInfo.phone;
  finalInfoRegister.password=props.finalInfo.password;
  finalInfoRegister.contact.sosname=props.finalInfo.contact.sosname;
  finalInfoRegister.contact.sosemail=props.finalInfo.contact.sosemail;
  finalInfoRegister.contact.sospassword=props.finalInfo.contact.sospassword;
  finalInfoRegister.contact.assurance=props.finalInfo.contact.assurance;
  if(props.finalInfo.allergenObject.allergens!=false){
    finalInfoRegister={...finalInfoRegister,allergen:allergensFinded};
  }
 
  
  
  console.log('ConsoleLog normal',finalInfoRegister)
  

  
  
  const onSubmit = (()=>{
      API.post('api/users/register', finalInfoRegister).then((res)=> {
        console.log("Register user", res);
      });
     
  });

  
  return (
    <div>
    
    {allergensFinded.map((allergenFinded)=>(
        <div key={allergenFinded._id}>
          {allergenFinded.name}
        </div>
    ))}

    <button onClick={()=>onSubmit()}>Confirmar</button>
    
    
    </div>
  )
}

export default SubmitUserRegister