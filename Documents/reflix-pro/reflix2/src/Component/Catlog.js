import React, { Component } from "react";
//import MovieDetail from "./MovieDetail";
import Movie from "./Movie"
import '../style/catlog.css'


class Catalog extends Component{
    constructor(){
        super()
        this.state={
            
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
    
    
    render(){
        console.log(this.props.movie)


        return(

            <div>
                <h3>you are in catalog</h3>
                <div> <input type="text" placeholder='search' onChange={this.search} /></div>
                
                
                
                <div className='movies'>
                    {(this.props.movie).map(m =>  (
                           <div>
                            <Movie movie={m} change={this.props.change} />
                            
                            </div>
                        ) 
                         
                    )}
                    
                </div>        
                                    
            </div> 
        );
}
                
    
}



export default Catalog;