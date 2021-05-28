// React tools.
import React, { useState } from "react";
// Components.
import Tab from "./Tab";

// Function component.
const Tabs = (props) => {
   // New state.
   let [activeTab, setActiveTab] = useState(props.children[0].props.label);

   // Safe return.
   return (
      <div className="tabs">
         <ul>
            {
               props.children.map((child) => {
                  // Get label.
                  const { label } = child.props;
                  // Safe return.
                  return (
                     <Tab
                        activeTab={activeTab}
                        key={label}
                        label={label}
                        onClick={() => setActiveTab(label)}
                     />
                  );
               })
            }
         </ul>
         <div className="tab-content">
            {
               props.children.map( child => {
                  // Validate.
                  if ( child.props.label !== activeTab ) return undefined;
                  // Safe return.
                  return child.props.children;
               })
            }
         </div>
      </div>
   );
};

// Export component.
export default Tabs;
