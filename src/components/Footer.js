// Import component main.
import React from 'react';
// import css.
import "../css/footer.css";

// Footer component function.
const Footer = props => {
   // Safe return.
   return(
      <footer className="footer flex space-between">
         <div className="cnt-shipping-warranty">
            <div className="shipping">
               <h5>Free Shipping</h5>
               <p>Get 2-day free shipping anywhere in North</p>
               <p>American</p>
            </div>
            <div className="warranty">
               <h5>2 years warranty</h5>
               <p>If anything goes wrong in the first two</p>
               <p>years, we'll replace it for free</p>
            </div>
         </div>
         <div className="cnt-price-button">
            <div>
               <p className="price">$295.95</p>
               <p>Need financing? Learn more</p>
            </div>
            <button className="button-blue">Buy Now</button>
         </div>
      </footer>
   );
};

// EXport componet.
export default Footer;
