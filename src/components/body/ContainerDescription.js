// React tools.
import React from "react";
// Componets.
import Description from "./Description";
import Choose from "./Choose";
import WarrantyCover from "./WarrantyCoverage";
import Features from "./Features";
import Specifications from "./Specifications";

// Function component.
const ContainerDescription = () => {
   // Safe return.
   return (
      <div className="cnt-body">
         <Description />
         <Choose />
         <WarrantyCover />
         <Features />
         <Specifications />
      </div>
   );
};

export default ContainerDescription;
