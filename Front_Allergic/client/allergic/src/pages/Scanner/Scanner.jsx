import React, { useState } from 'react';
import { BarcodeScanner } from '../../components/BarcodeScanner/BarcodeScanner';
import QrScanner from '../../components/QrScanner/QrScanner';
import './Scanner.scss'

const Scanner = () => {

  const [barcode, setBarcode] = useState(true)

  




  return <div className="scanner-container">

    {barcode === true ? <BarcodeScanner/> : <QrScanner/>}



  

    

    

    <div className="scanner-container-btn">
    <div className="scanner-container-btn--code">
    {barcode === true ? <button className="scanner-container-btn--code--blue" onClick={() => {setBarcode(true)}}><img src="./Images/scannerCodeBarWhite.png" alt="Code Bar White"/></button> : <button className="scanner-container-btn--code--grey" onClick={() => {setBarcode(true)}}><img src="./Images/scannerCodeBarBlack.png" alt="Code Bar black"/></button> }
    <p>Código de Barras</p>
    </div>
    <div className="scanner-container-btn--code">
    {barcode === true ? <button className="scanner-container-btn--code--grey" onClick={() => {setBarcode(false)}}><img src="./Images/scannerCodeQrBlack.png" alt="Code Qr black"/></button> : <button className="scanner-container-btn--code--blue" onClick={() => {setBarcode(false)}}><img src="./Images/scannerCodeQrWhite.png" alt="Code Qr White"/></button> }
    <p>Código QR</p>
    </div>
    </div>

  </div>;
};

export default Scanner;
