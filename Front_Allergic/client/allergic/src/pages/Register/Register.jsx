import React from 'react';
import FormUser from '../../components/FormUser/FormUser';
import FormEmergency from '../../components/FormEmergency/FormEmergency';
import FormAllergen from '../../components/FormAllergen/FormAllergen';

const Register = () => {
  //const [form, setForm] = React.useState(1);
  return  (
    <div>
     <FormUser  />
    {/* {form === 2 && <FormAllergen setForm={setForm} />}
    {form === 3 && <FormEmergency setForm={setForm} />} */}
    </div>
  )

 


  
};

export default Register;
