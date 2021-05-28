// Main component.
import React, { Component } from 'react';
// import css.
import "../css/App.css";
// Components.
import Header from "./Header";
import Footer from "./Footer";
import BodyContainer from "./BodyContainer";

class App extends Component {
   // State.
   state = {
      title: "serempre"
  };

   render() {
      return (
         <React.Fragment>
            <div className="cnt-main">
               {/*------ Header ------------*/}
               <Header title={this.state.title}/>
               {/*------ Main Container ----*/}
               <BodyContainer />
            </div>
            {/*--------- Footer ------------*/}
         <Footer />
         </React.Fragment>
      );
   };
};

export default App;
