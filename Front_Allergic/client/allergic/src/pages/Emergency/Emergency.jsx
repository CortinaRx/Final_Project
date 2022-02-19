import { DILATE } from 'quagga';
import React,{ useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { API } from '../../shared/services/api';


const Emergency = () => {

  const [DataGET, SetDataGET]= useState([])
  
  

  useEffect(() => {
   API.get("api/users/"+JSON.parse(localStorage.getItem("id"))).then((res) => {
    console.log(JSON.parse(localStorage.getItem("id")));
    SetDataGET( res.data.contact)

    
  })},[])
  return (
    
    <div className="Sos">

      {DataGET ? 
      <div className="Sos__content">

        <h1>Tu contacto de emergencia: </h1>

        <div className="Sos__main">
          <div className="Sos__spaceDiv">
            <p>
              <span>Nombre completo de tu contacto: </span>
              {DataGET.sosname}
            </p>
            <p>
              <span>Dirección e-mail: </span>
              {DataGET.sosemail}
            </p>
             <p>
              <span>Móvil: </span>
              {DataGET.sosphone}
            </p> 
            <p>
              <span>Compañia de Seguros / Nº Póliza: </span>
              {DataGET.assurance}
            </p>
          </div>


          <div className="Sos__buttons">
            <button
              className="Sos__btn Sos__btn--pink"
              name="EMERGENCIA"
            >
              EMERGENCIA
            </button>
            <Link className="Sos__btn" to="/home">
              Volver
            </Link>
          </div>
        </div>

      </div>

      : 
      <h3>En caso de Emergencia por favor atiendan los siguientes datos:</h3>
      }
    </div> 
    
  );
}
  

  
export default Emergency;
