import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Comment from './components/addcomment.component'
import Rating from './components/rating.component';


function App() {
  return (
    <div class="container">
    <div class="row" style={dicStyle}>
      <div class="col"><img   src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="" width="200px" height="200"/></div>
      <div class="col"><Comment/></div>
      <div class="w-100"><Rating/></div>
      <div class="col">Ratings</div>
      
    </div>
  </div>
  );
}


const dicStyle={
    position: 'relative',
    top: '50px',
    background: 'beige',
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '1px 1px 9px 0px #9a9898'
}




export default App;
