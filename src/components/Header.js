// Import component main.
import React from 'react';
// Import image.
import logo from "../images/logo.png";

// Header component function.
const Header = (props) => {
   // Safe return.
   return(
      <header className="container header flex content-center">
         <div>
            <img src={logo} alt="Serempre"/>
         </div>
      </header>
   );
};

// EXport componet.
export default Header;
