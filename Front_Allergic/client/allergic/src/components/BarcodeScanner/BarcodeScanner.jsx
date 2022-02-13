import Quagga from 'quagga';
import { useContext, useEffect, useState } from "react"; // ES6
import { Link, useNavigate } from 'react-router-dom';
import { IsAllergicContext } from '../../shared/contexts/IsAllergicContext';
import './BarcodeScanner.scss'
export function BarcodeScanner ({foodGET, userAllergies}) {
    const {isAllergic, setIsAllergic}=useContext(IsAllergicContext);
    const [bandera, setBandera]= useState(false);
    const navigate = useNavigate();
    // console.log('ESTO LE LLEGA AL BARCODESCANNER',foodGET)
    // console.log('ESTO LE LLEGA AL BARCODESCANNER',userAllergies)
    

    const initBarcode = () => {
        
    //    console.log('blaladvab',userAllergies)
        Quagga.init({
            inputStream: {             
                
                name: "Live",
                type: "LiveStream",
                target: document.querySelector(".c-barcode-scanner--video")    // Or '#yourElement' (optional)
            },
            decoder: {
                readers: ["ean_reader"]
            }
        }, function (err) {
            if (err) {
                console.log(err);
                return
            }
            console.log("Initialization finished. Ready to start");
            Quagga.start();
        });
        Quagga.onDetected((code) => {console.log(code)
            
            // console.log('AQUI ESTAN TODOS', foodGET)
            // console.log('ALERGIAS', userAllergies)
            for(let i=0; i<foodGET.length; i++){                                                //Este FOR  recorre toda la comida de la base de datos
                    let foodCompare=foodGET[i]

                if(foodCompare.barcode.toString().includes(code.codeResult.code)){              //Este IF compara el codigo de barras de la base de datos con el codigo de barras que escaneamos
                    console.log('EUREKA')
                    console.log('Comida elegida',foodCompare)
                    //Aquí comparamos las alergias
                    if(userAllergies.length>0){                                                 //Este IF se encara de consultar si el usuario tiene alguna alergia

                        for (const allergen of foodCompare.allergen) {                          //Este FOR recorre los alergenos de la comida de la base de datos
                            if(userAllergies.includes(allergen._id)){                           //Este IF compara las alergias del usuario con los alergenos de la comida
                                console.log('Bro, eres alergico')
                                setIsAllergic(isAllergic+1)
                            }else{
                                console.log('no eres alergico')
                            }
                            
                        }
                        //Aquí comparamos las trazas
                        for (const trace of foodCompare.traces) {                               //Este FOR recorre las trazas de la comida de la base de datos
                            if(userAllergies.includes(trace._id)){                              //Este IF compara las alergias del usuario con las trazas de la comida
                                console.log('Bro, eres tracetico')
                                setIsAllergic(isAllergic+1)
                            }else{
                                console.log('no eres tracetico')
                            }
                            
                        }
                    }else{
                        console.log('NO TIENES ALERGIAS')
                    }
                }
            }

            
            setBandera(true);
            console.log('bandera1', bandera)
        }
        
        
        )
        
        
    }
    useEffect(initBarcode, [])

    console.log('bandera2',bandera)
    if(bandera==true){
            navigate("/resultscanner")
    }

    return (<div className="c-barcode-scanner">

    <div className="c-barcode-scanner-leave">
      <Link to="/home" ><img src="./Images/barcodeLeaveImg.png" alt="Leave Icon"/></Link> 
    </div>

    <div className="c-barcode-scanner-title">
    <h2>Escaneando...</h2>

    <h6>Tan solo tienes que centrar el <span>código de barras</span> del producto en el recuadro.</h6>

    </div>
    
    <div className="c-barcode-scanner--video">

    
    </div>




    </div>
    )
}
