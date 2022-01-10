import { Component } from "react";
import {BrowserRouter as Router , Route ,Link} from 'react-router-dom';
import '../style/Landing.css'


class Landing extends Component{
    constructor(){
        super()
        this.state={
            users:[{name: "shahd", background:"blue"},
                  { name: "user2", background :"pink"}]

        }  
    }


    render (){
        return ( 
            <div>
            
            <h1> who's watching</h1>
            <div className ="watching">
            {this.state.users.map(user => { return<Link to ="/catlog"> <div> {user.name}</div></Link> })} 
            </div>
                  
        </div>
          
        );
    }
}
export default Landing;