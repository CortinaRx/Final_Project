import React, { useContext } from 'react';
import { BarcodeScanner } from '../../components/BarcodeScanner/BarcodeScanner';
import { IsAllergicContext } from '../../shared/contexts/IsAllergicContext';

const ResultScanner = () => {
  const {isAllergic, setIsAllergic}=useContext(IsAllergicContext);
  return <div>

      {isAllergic>0 ? <div>Soy alergico</div> : <div>No es alergico</div>}
  </div>;
};

export default ResultScanner;
