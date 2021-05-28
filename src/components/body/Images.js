// React tools.
import React, { useEffect, useState } from "react";
// Underscore.
import _ from 'underscore';
/* Img logos */
import logo1 from "../../images/1.jpg";
import logo2 from "../../images/2.jpg";
import logo3 from "../../images/3.jpg";
import touch from "../../images/touch.png";
import equalizer from "../../images/equalizer.png";
import active from "../../images/active.png";
// import logo4 from "../../images/4.jpg";
// import logo5 from "../../images/5.jpg";


//
const Images = () => {
   // Init use state
   /* Initialize logos url */
   let [logos] = useState([
      {id: 1, alt: "", url: logo1, isSelected: false},
      {id: 2, alt: "", url: logo2, isSelected: false},
      {id: 3, alt: "", url: logo3, isSelected: false}
   ]);

   let [controls] = useState([
      {id: 1, alt: "", url: touch, description: "Customizable Touch Controls"},
      {id: 2, alt: "", url: equalizer, description: "Built-in Equalizer"},
      {id: 3, alt: "", url: active, description: "Active Noise Cancellation"}
   ]);

   // New state images.
   let [showImage, setShowImage] = useState({});

   // Similar to componentDidMount and componentDidUpdate:
   useEffect(() => {
      //
      if ( logos.length > 0 ) {
         // Get current selected.
         const current = _.findWhere(logos, { isSelected: true });

         // Validate
         if ( _.isUndefined(current) ) {
            // Update attribute.
            logos[0].isSelected = true
            // Update state.
            setShowImage(logos[0]);
         }
      }
   });

   //
   const onClickimage = (e, node) => {
      // Update previous.
      showImage.isSelected = false;
      // Update new selected.
      node.isSelected = true;
      // Update state.
      setShowImage(node);
   };

   // Safe return.
   return (
      <div className="cnt-images">
         {/* Show image selected */}
         <div className="cnt-main-image">
            <img key={ showImage.id } src={ showImage.url } alt={ showImage.alt }/>
         </div>
         {/* Items images */}
         <ul className="cnt-items-icons">
            {
               logos.map((imagenNode, index) => (
                  <li className={(imagenNode.isSelected ? "selected" : "deslected") } key={ imagenNode.id } onClick={ (e) => onClickimage(e, imagenNode)} tabIndex={index}>
                     <img key={ imagenNode.id } src={ imagenNode.url } alt={ imagenNode.alt }/>
                  </li>
               ))
            }
         </ul>
         {/* Desciption */}
         <ul className="cnt-items-controls">
         {
            controls.map((node, index) => (
               <li key={ node.id }>
                  <img key={ node.id } src={ node.url } alt={ node.alt }/>
                  <p>{ node.description }</p>
               </li>
            ))
         }
      </ul>
      </div>
   );
};

export default Images;
