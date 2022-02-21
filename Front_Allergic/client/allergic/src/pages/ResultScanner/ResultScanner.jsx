import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BarcodeScanner } from '../../components/BarcodeScanner/BarcodeScanner';
import { ProductContext } from '../../shared/contexts/ProductContext';
import { API } from '../../shared/services/api';

const ResultScanner = () => {
  const {product, setProduct}=useContext(ProductContext);                 //esta variable muestra el codigo de barras escaneado

  const [foodGET, setFoodGET] = useState([]);                             //esta variable recoge todos los productos en la base de datos
  const [userAllergies, setUserAllergies] = useState([]);                 //esta variable recoge todas las alergias del usuario
  const [isAllergic, setIsAllergic] = useState([]);                       //esta variable recoge las alergías que coinciden
  const [banderaUserAllergies, setBanderaUserAllergies] = useState(true); //esta bandera nos indica si no tiene ninguna alergia
  const [banderaFOR, setBanderaFOR] = useState(false);                    //esta bandera impide que el useEffect entre en bucle
  const [foodElected, setFoodElected] = useState({});                     //esta variable recoge el producto escaneado
  

  console.log("Productos Rick",product);

  useEffect(() => {
    if(banderaFOR==false){
      API.get("api/food").then((res) => {
        console.log(res.data);
        setFoodGET(res.data);
      });

      API.get("api/users/"+JSON.parse(localStorage.getItem("id"))).then((res) => {
        console.log(JSON.parse(localStorage.getItem("id")));
        console.log(res.data.allergen);
        if(res.data.allergen.length>0){
          setUserAllergies(res.data.allergen);
        }else{
          setBanderaUserAllergies(false)
        }
      });

    
        for(let i=0; i<foodGET.length; i++){                                                //Este FOR  recorre toda la comida de la base de datos
          let foodCompare=foodGET[i]
      
            if(foodCompare.barcode.toString().includes(product.code.codeResult.code)){      //Este IF compara el codigo de barras de la base de datos con el codigo de barras que escaneamos
                console.log('EUREKA')
                console.log('Comida elegida',foodCompare)
                setFoodElected(foodCompare);                                                //Guardamos el producto en una variable de estado
                //Aquí comparamos las alergias
                if(userAllergies.length>0){                                                 //Este IF se encara de consultar si el usuario tiene alguna alergia
      
                    for (const allergen of foodCompare.allergen) {                          //Este FOR recorre los alergenos de la comida de la base de datos
                        if(userAllergies.includes(allergen._id)){                           //Este IF compara las alergias del usuario con los alergenos de la comida
                            console.log('Bro, eres alergico')
                            setIsAllergic(isAllergic+1)
                            break
                        }else{
                            console.log('no eres alergico')
                        }
                        
                    }
                    //Aquí comparamos las trazas
                    for (const trace of foodCompare.traces) {                               //Este FOR recorre las trazas de la comida de la base de datos
                        if(userAllergies.includes(trace._id)){                              //Este IF compara las alergias del usuario con las trazas de la comida
                            console.log('Bro, eres tracetico')
                            setIsAllergic(isAllergic+1)
                            break
                        }else{
                            console.log('no eres tracetico')
                        }
                        
                    }
                }else{
                    console.log('NO TIENES ALERGIAS')
                }
            }
        }
    }
    
    if(foodGET.length>0){

      setBanderaFOR(true);  
    }

  }, [isAllergic, product, setProduct, foodGET, userAllergies,banderaUserAllergies, banderaFOR, foodElected]);

  
console.log("aaaaaaaaaaaaaaaaaaaaaa", foodElected);





  return <div>

      {foodGET.length>0 && <div>foodGET entra</div>}
    <div className='emergency-register-container--page'>
      <Link to="/scanner"><h4><img src="./Images/returnBackImage.png" alt="Back Icon"/>Volver</h4></Link>
      <Link to="/"><img src="./Images/barcodeLeaveImg.png" alt="Cruz"/></Link>
    </div>
    <div>
      <h2>Aquí tienes el resultado.</h2>

    {isAllergic>0 ? <p>Este producto <span>NO</span> es apto para ti</p> : <p>Este producto es apto para ti.</p>}
    <div>
      <img src={foodElected.img} alt="producto"/>
    </div>
    </div>

      
  </div>;
};

export default ResultScanner;
