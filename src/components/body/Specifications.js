// React tools.
import React, { useState }  from "react";

// Function component.
const Specifications = () => {
   // Init use state.
   let [specifications] = useState([
      {id: 1, title: "Dimensions", description: "76.8 x 43.8 x 34.7 mm (earbuds and charging case)"},
      {id: 2, title: "USB Standard", description: "USB-C"},
      {id: 3, title: "Power supply", description: "USB-C"},
      {id: 4, title: "Frequency response (Microphone)", description: "100 Hz to 10 kHz"},
      {id: 5, title: "Frequency response", description: "5 - 21,000 Hz"},
      {id: 6, title: "Noise cancellation", description: "Single-Mic ANC per earbud side"}
   ]);

   // Safe return.
   return (
      <div className="cnt-specification">
         <p className="title-specification">Specifications.</p>
         {/* Items specification */}
         <ul className="cnt-items-icons">
            {
               specifications.map((specification, index) => (
                  <li key={ specification.id } tabIndex={index}>
                     <div>
                        <p>{ specification.title }</p>
                     </div>
                     <div>
                        <p>{ specification.description }</p>
                     </div>
                  </li>
               ))
            }
         </ul>
      </div>
   );
};

// Export component.
export default Specifications;
