import React from "react";

// Function component.
const Tab = (props) => {
   // Destructuring props.
   let { onClick, activeTab, label } = props,
   // Class name.
   className = "tab-list-item";

   // Validate.
   if (activeTab === label) {
      // Update class name.
      className += " tab-list-active";
   }

   // Safe retun.
   return (
      <li className={className} onClick={() => onClick(label)}>
        {label}
      </li>
   );
}

// Export component.
export default Tab;
