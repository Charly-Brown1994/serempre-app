// React tools.
import React, { useState }  from "react";
// Import components.
import Cards from "../common/cards/Cards"

// Function component.
const Features = () => {
   // Init use state.
   let [features] = useState([
      {id: 1, title: "Voice Assistant support", price: "", isSelected: false},
      {id: 2, title: "Customizable controls", price: "25", isSelected: false}
     /* {id: 3, title: "Matte Black", description: "Of all of the celestial bodies that capture our attention and fascination as astronomers.", isSelected: false},
      {id: 4, title: "Matte Black", description: "Of all of the celestial bodies that capture our attention and fascination as astronomers.", isSelected: false},
      {id: 5, title: "Matte Black", description: "Of all of the celestial bodies that capture our attention and fascination as astronomers.", isSelected: false},
      {id: 6, title: "Matte Black", description: "Of all of the celestial bodies that capture our attention and fascination as astronomers.", isSelected: false}*/
   ]);

   // Safe return.
   return (
      <div className="cnt-feature">
         {/* Items features */}
         <Cards items={features} title="Features" className="feature"/>
      </div>
   );
};

// Export component.
export default Features;
