// React tools.
import React, { useState }  from "react";
// Common component.
import Tabs from "../common/tabs/Tabs";

// Function component.
const Description = (props) => {
   //
   let [tabs] = useState([
      {id: 1, title: "Overview", description: "For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday.", isSelected: false},
      {id: 2, title: "Features", description: "Of all of the celestial bodies that capture our attention and fascination as astronomers.", isSelected: false},
      {id: 3, title: "What's in the box?", description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", isSelected: false}
   ]);

   // Build children tabs.
   let ChidldrenTab = () => {
      // Safe return.
      return tabs.map( tab => {
         // Safe return
         return (
            <div key={tab.id} label={tab.title}>
               {tab.description}
            </div>
         )
      });
   };

   // Safe return.
   return (
      <div className="cnt-description">
         <div className="main-titles">
            <p className="title1">NEW RELEASE</p>
            <p className="title2">MOMENTUM True Wireless 2</p>
            <p className="title3">Earbuds that put sound first</p>
         </div>
         <div className="price-title">
            <p className="title">STARTING AT</p>
            <p className="price">$295.95</p>
         </div>
         {/*------------------- Common tabs--------------*/}
         <Tabs>
            { ChidldrenTab() }
         </Tabs>
      </div>
   );
};

export default Description;
