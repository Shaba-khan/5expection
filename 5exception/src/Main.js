import React, { Component } from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Dynamicform from './Components/Dynamicform';
import DisplayList from './Components/DisplayList';




class Main extends Component {
  
  render() {
    return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Dynamicform />}/>
            <Route exact path="/list" element={<DisplayList />}/>
            </Routes>
        </BrowserRouter>
    );
  }
}
 
export default Main;