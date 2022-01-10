import React, { Component } from 'react';

class Movie extends Component {

    button=()=>{
        this.props.change(this.props.movie.id)
   }
    render() {


        return (
            <div>
                
                          
                            <button onClick={this.button}>{this.props.movie.isRented?"-":"+"}</button>
                            <h3>{this.props.movie.title}</h3>
                            <img src= {this.props.movie.img}/>

                            
                            
                         
                         
                    
            </div>
        );
    }
}

export default Movie;