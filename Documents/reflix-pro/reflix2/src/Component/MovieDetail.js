import React, { Component } from 'react';

class MovieDetail extends Component {
    render() {
        console.log(this.props.state.movie)
        return (
            <div>
                {this.props.state.movie.map(m=>
                <div>
                <h1>{m.title}</h1>
                <h3>{m.year}</h3>
                <img src={m.img} />
                <p>{m.descrShort}</p>

                
                
                </div>
                 
                
                    )}
                
            
                
            </div>
        );
    }
}

export default MovieDetail;