// React tools.
import React from "react";
// import css.
import "../css/body.css";
// Components.
import Images from "./body/Images";
import ContainerDescription from "./body/ContainerDescription";

const BodyContainer = () => {
   // Safe return.
   return (
      <div className="body">
         <Images />
         <ContainerDescription />
      </div>
   );
};

export default BodyContainer;
