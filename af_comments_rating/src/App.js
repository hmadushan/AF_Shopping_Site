import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Comment from './components/addcomment.component'


function App() {
  return (
    <div class="container">
    <div class="row" style={dicStyle}>
      <div class="col"><img src="pic_trulli.jpg" alt="Trulli" width="500" height="333"/></div>
      <div class="col"><Comment/></div>
      <div class="w-100"></div>
      <div class="col">col</div>
      
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
