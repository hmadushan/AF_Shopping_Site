import React, { Component } from 'react'
import axios from 'axios'
import Rating from '@material-ui/lab/Rating';

export default class Addcomment extends Component {

    constructor(props) {
        super(props)
        this.state={
            
            username: 'sat',
            content:'',
            product:'1',
            Comments:[],
            rate:0         
        }
      //bind
      this.handleCommets=this.handleCommets.bind(this);
  
    }
      componentDidMount(){
          axios.get('http://localhost:5001/comments/')
          .then(response => {
            this.setState({ Comments: response.data });
            console.log( response.data);
            
          })
          .catch((error) => {
             console.log(error);
          })
      }
      handleCommets(event){
          this.setState({content:event.target.value})
      } 
      onSubmit() {       
          const Comments = {
              user: this.state.username,
              content: this.state.content,
              product: this.state.product,
              rate: this.state.rate,
              date:new Date()
            
          };
        console.log(Comments);
        //connect back end front end using axios
        axios.post(' http://localhost:5001/comments/add', Comments)
        .then(res => console.log(res.data));
     
  
        }
  
      deleteExercise(id) {
          axios.delete('http://localhost:5001/comments/'+id)
            .then(res => console.log(res.data));
          
            this.setState({
                Comments: this.state.Comments.filter(el => el._id !== id)
          })
        }
  
  

    render() {
       
        return (
            <div>
                 <input type="text" class="form-control" placeholder="Commet" value={this.state.content} onChange={this.handleCommets} aria-label="Username" aria-describedby="basic-addon1"/>

                 <button type="button" class="btn btn-primary" onClick={()=>{this.onSubmit()}}>Commets</button>
                   <li>
                      {this.state.Comments.map(comment=>{
                          return <ul style={comment.productid==1?{display:"block"}:{display:"none"}}>{comment.content} <span >{comment.date}></span> <span><button onClick={()=>{this.deleteExercise(comment._id)}}>Dlete</button></span> </ul>
                      })}
                   </li>

            </div>
        )
    }
}
