import React, { Component } from 'react'
import Rating from '@material-ui/lab/Rating';
import Axios from 'axios';


export default class RatingAdd extends Component {

    constructor(props){
        super(props)

        this.state={
            rating:'',
            getrating:'',
            ratingdata:[],
            productid:1,
            editemod:false
        }
        this.handleRating=this.handleRating.bind(this);
    }

  async  componentDidMount(){

   if(this.state.editemod==false){ 
    console.log("adfdffafaffaff");
    Axios.get('http://localhost:5001/ratings/'+this.state.productid)
    .then(res=>{
        console.log("get rating");
         console.log(res.data)
        this.setState({
            rating:res.data[0].rating
        })
       
    })
    .catch(err=>console.log('error'+err));
           
        }   
    }

    handleRating=(e)=>{
            
        console.log(e.target.value)
        this.state.editemod=true
       this.setState({
           rating:e.target.value
       }, () =>this.addRating())
        
    }

    addRating=()=>{

        const rating={

            rating:this.state.rating,
            username:'harsha',
            productid:'1'

        }
        console.log(this.state.rating);
        
        Axios.put('http://localhost:5001/ratings/add',rating)
                .then(res=>console.log(res.data))
                .catch(err=>console.log('error'+err))

              //  this.setState({rating:0})
                this.setState({editemod:false})
    }

    

    render() {
        return (
            <div>
                <Rating name="simple-controlled" value={this.state.rating} onChange={(e)=>this.handleRating(e)} />                
            </div>
        )
    }
}
