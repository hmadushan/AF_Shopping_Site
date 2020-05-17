import React , { Component } from 'react';
import axios from 'axios';

export default class addComment extends Component {
  constructor(props) {
      super(props)
      this.state={
          
          username: '',
          content:''
          //date
      }
    //bind

  }
    componentDidMount(){
        axios.get('http://localhost:5001/comments/')
        .then(response => {
          this.setState({ exercises: response.data });
        })
        .catch((error) => {
           console.log(error);
        })
    }
    deleteExercise(id) {
        axios.delete('http://localhost:5001/comments/'+id)
          .then(res => console.log(res.data));
        
          this.setState({
          exercises: this.state.exercises.filter(el => el._id !== id)
        })
      }




}
