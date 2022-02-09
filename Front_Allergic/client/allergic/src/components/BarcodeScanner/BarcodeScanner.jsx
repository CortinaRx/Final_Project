import Quagga from 'quagga';
import { useEffect } from "react"; // ES6
import { Link } from 'react-router-dom';
import './BarcodeScanner.scss'
export function BarcodeScanner () {
    const initBarcode = () => {
        Quagga.init({
            inputStream: {
                // constraints: {
                //     width: 318,
                //     height: 216,
                    
                // },
               
                
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
        Quagga.onDetected((code) => +console.log(code))

    }
    useEffect(initBarcode, [])
    return (<div className="c-barcode-scanner">

    <div className="c-barcode-scanner-leave">
      <Link to="/" ><img src="./Images/barcodeLeaveImg.png" alt="Leave Icon"/></Link> 
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
