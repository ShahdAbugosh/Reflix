import React, { Component } from "react";
//import MovieDetail from "./MovieDetail";
import Movie from "./Movie"
import '../style/catlog.css'


class Catalog extends Component{
    constructor(){
        super()
        this.state={
            budget:100
            
        }
    }
    
    search=(event)=>{
        let find = event.target.value;
        console.log(find)
        for(let m of this.props.movie){
            if(m.title===find){
                return m.title
            }
        }
         
        this.setState({
            movie:find

        })

    }
    calcBudget = () => {
        let budget = this.state.budget
         budget -= 3
        this.setState({
            budget: budget
        })
        console.log(budget)
    }
    
    
    render(){
        console.log(this.props.movie)


        return(

            <div>
                <h3>you are in catalog</h3>
                <div> <input type="text" placeholder='search' onChange={this.search} /></div>
                
                
                
                <div className='movies'>
                    {(this.props.movie).map(m =>  (
                           <div>
                            <Movie movie={m} change={this.props.change} calcBudget={this.calcBudget} budget={this.state.budget} />
                            
                            </div>
                        ) 
                         
                    )}
                   
                    
                </div>   

                <div className ="user"> 

                
                </div>     
                                    
            </div> 
        );
}
                
    
}



export default Catalog;