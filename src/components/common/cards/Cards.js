// React tools.
import React, { useState }  from "react";
// Underscore.
import _ from 'underscore';

// Function component.
const Features = (props) => {
   // Destruturing props.
   const { items, title, className } = props;
   // Init use state.
   let [cards] = useState(items);

   // New state images.
   let [card, setCard] = useState({});

   // On click item.
   const onItem = (node) => {
      // Validate.
      if ( !_.isEmpty(card) ) {
         // Update previous.
         card.isSelected = false;
      }

      // Update new selected.
      node.isSelected = true;
      // Update state.
      setCard(node);
   };

   // Build pirce.
   const price = (price) => {
      // Return empty-
      if ( price === "" ) return ""

      // Safe return.
      return (
         <p>+ ${price}</p>
      )
   };

   // Build description.
   const description = (description) => {
      // Return empty-
      if ( _.isUndefined(description) ) return ""

      // Safe return.
      return (
         <span>{description}</span>
      )
   };

   // Safe return.
   return (
      <div className={`cnt-${className}`}>
         <p className={`title-${className}`}>{title}</p>
         {/* Items features */}
         <ul className="cnt-items-icons">
            {
               cards.map((card, index) => (
                  <li className={(card.isSelected ? "selected" : "deslected") } key={ card.id } onClick={ () => onItem(card)} tabIndex={index}>
                     <div>
                        <p>{ card.title }</p>
                        {/* Description*/}
                        { description(card.description) }
                     </div>
                     <div className="price">
                        {price(card.price)}
                     </div>
                  </li>
               ))
            }
         </ul>
      </div>
   );
};

// Export component.
export default Features;
