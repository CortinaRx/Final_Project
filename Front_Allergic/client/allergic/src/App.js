
import './App.scss';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Scanner from './pages/Scanner/Scanner';
import RestMap from './pages/RestMap/RestMap';
import Emergency from './pages/Emergency/Emergency';
import Favorite from './pages/Favorite/Favorite';
import Diary from './pages/Diary/Diary';
import Register from './pages/Register/Register';
import { useState } from 'react';
import { JwtContext } from './shared/contexts/JwtContext';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';



/* import Login from './pages/Login/Login'; */





function App() {
  const [jwt, setJwt] = useState(localStorage.getItem('token') || null);
  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
    <div>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/restaurant-map" element={<RestMap />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/registerpage" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />



          <Route path="/register" element={<Register />} />

        
          

          
         

         


          {/* <Route path="/login" element={<LoginPage />} /> */}



     
        </Routes>

     </Router>
      
    </div>
    </JwtContext.Provider>
  );
}

export default App;
