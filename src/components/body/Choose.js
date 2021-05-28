// React tools.
import React, { useState }  from "react";
// Underscore.
import _ from 'underscore';

// Function component.
const Choose = () => {
   // Init use state.
   let [chooses] = useState([
      {id: 1, title: "Ivory White", description: "For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True.", isSelected: false},
      {id: 2, title: "Matte Black", description: "Of all of the celestial bodies that capture our attention and fascination as astronomers.", isSelected: false}
     /* {id: 3, title: "Matte Black", description: "Of all of the celestial bodies that capture our attention and fascination as astronomers.", isSelected: false},
      {id: 4, title: "Matte Black", description: "Of all of the celestial bodies that capture our attention and fascination as astronomers.", isSelected: false},
      {id: 5, title: "Matte Black", description: "Of all of the celestial bodies that capture our attention and fascination as astronomers.", isSelected: false},
      {id: 6, title: "Matte Black", description: "Of all of the celestial bodies that capture our attention and fascination as astronomers.", isSelected: false}*/

   ]);

   // New state images.
   let [choose, setChoose] = useState({});


   // On click item.
   const onItemChoose = (node) => {
      // Validate.
      if ( !_.isEmpty(choose) ) {
         // Update previous.
         choose.isSelected = false;
      }

      // Update new selected.
      node.isSelected = true;
      // Update state.
      setChoose(node);
   };

   // Safe return.
   return (
      <div className="cnt-choose">
         <p className="finish">Choose your finish.</p>
         {/* Items choose */}
         <ul className="cnt-items-icons">
            {
               chooses.map((choose, index) => (
                  <li className={(choose.isSelected ? "selected" : "deslected") } key={ choose.id } onClick={ () => onItemChoose(choose)} tabIndex={index}>
                     <p>{ choose.title }</p>
                     <span>{ choose.description }</span>
                  </li>
               ))
            }
         </ul>
      </div>
   );
};

// Export component.
export default Choose;
