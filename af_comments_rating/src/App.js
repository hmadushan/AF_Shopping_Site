import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Comment from './components/addcomment.component'
import Rating from './components/rating.component';

import background from './image/2.jpeg'


function App() {
  return (
    <div class="container" style={containerStyle}>
    <div class="row" style={dicStyle}>
      <div class="col">
        <img   src="https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="" width="350px" height="300px"/></div>
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

const containerStyle={
  backgroundImage: `url(${background})`

}



export default App;
