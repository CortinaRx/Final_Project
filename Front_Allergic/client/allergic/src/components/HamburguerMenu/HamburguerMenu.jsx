import React from 'react';
import { Link } from 'react-router-dom';
import './HamburguerMenu.scss'
//pendiente de revisar;
const HamburguerMenu = () => {

 


  return (<nav className="navbar">
      <div className="navbar-container container">
          <input type="checkbox" name="" id=""/>
          <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>
          <ul className="menu-items">
              <li className="menu-items--li"><img className="menu-items--li--img1" src="./Images/HamburguerMenuProfile.png" alt=""/><Link to="/profile">Perfil</Link></li>
              <li className="menu-items--li"><img className="menu-items--li--img" src="./Images/navBarIconStar.png" alt=""/><Link to="/favorite">Favorito</Link></li>
              <li className="menu-items--li"><img className="menu-items--li--img" src="./Images/navBarIconDiary.png" alt=""/><Link to="/diary">Diario</Link></li>
              <li className="menu-items--li"><img className="menu-items--li--img" src="./Images/navBarIconShared.png" alt=""/><Link to="/shared">Compartir</Link></li>
              <li className="menu-items--li"><img className="menu-items--li--img1" src="./Images/HamburguerMenuTranslate.png" alt=""/><Link to="/translator">Traductor</Link></li>
              <li className="menu-items--li"><img className="menu-items--li--img1" src="./Images/HamburguerMenuTerms.png" alt=""/><Link to="/terms">Terminos</Link></li>
              <li className="menu-items--li"><img className="menu-items--li--img1" src="./Images/HamburguerMenuLogOut.png" alt=""/><Link to="/logout">Salir</Link> </li>
          </ul>
      </div>
  
  

 
  
  </nav>



 
















   
);
};

export default HamburguerMenu;

