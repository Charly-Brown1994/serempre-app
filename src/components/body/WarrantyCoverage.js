// React tools.
import React, { useState }  from "react";
// Import components.
import Cards from "../common/cards/Cards"

// Function component.
const WarrantyCover = () => {
   // Init use state.
   let [warrantys] = useState([
      {id: 1, title: "2 years coverage", description: "For the past 75 years, Sennheiser has put sound first.", price: "", isSelected: false},
      {id: 2, title: "3 years coverage", description: "For the past 75 years, Sennheiser has put sound first.", price: "25", isSelected: false}
     /* {id: 3, title: "Matte Black", description: "Of all of the celestial bodies that capture our attention and fascination as astronomers.", isSelected: false},
      {id: 4, title: "Matte Black", description: "Of all of the celestial bodies that capture our attention and fascination as astronomers.", isSelected: false},
      {id: 5, title: "Matte Black", description: "Of all of the celestial bodies that capture our attention and fascination as astronomers.", isSelected: false},
      {id: 6, title: "Matte Black", description: "Of all of the celestial bodies that capture our attention and fascination as astronomers.", isSelected: false}*/
   ]);

   // Safe return.
   return (
      <div className="cnt-warranty">
         {/* Items features */}
         <Cards items={warrantys} title="Would you like to add extended warranty coverage?." className="warranty"/>
      </div>
   );
};

// Export component.
export default WarrantyCover;
