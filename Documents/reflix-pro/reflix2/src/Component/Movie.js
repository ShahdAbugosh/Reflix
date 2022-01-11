import React, { Component } from 'react';

class Movie extends Component {

    button=()=>{
        this.props.change(this.props.movie.id)
   }
    budgetFun=()=>{
        if(this.props.movie.isRented){
        this.props.calcBudget()
        }
        
       
    }   
    
   
    render() {


        return (
            <div>
                
                          <div className= "movie">
                          <button onClick={this.button}>{this.props.movie.isRented?"-":"+"}</button>
                         <button onClick = {this.budgetFun}>show Budget</button>
                         <h3>{this.props.movie.title}</h3>
                         <img src= {this.props.movie.img}/>

                          </div>
                            
                            <div className=" budget">
                                <h3>{this.props.budget}</h3>
                            </div>
                            
                         
                         
                    
            </div>
        );
    }
}

export default Movie;