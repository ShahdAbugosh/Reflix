import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
import Transcations from './compnent/transcations';
import Operation from './compnent/operation';

class App extends Component {
  constructor(){
    super()
    this.state={
      
      data:[
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ],
      total:0

    }
  }
  totalAmount=()=>{
    let totalA=0
    for(let t in this.state.data){
      totalA+=t.amount

    }
    this.setState({total:totalA})
  }
   
  render() {
    return (
      <div>

        <div className="linkes">
          <Link to="/transections">transactions</Link>
        </div>
       <h3>{this.state.data.map(a =>( a.amount))}</h3>
       <button onClick= {this.totalAmount}>show Amount</button>
       <h4>{this.state.total}</h4>
       

       <Route exact path ="/transections" render={()=><Transcations data={this.state.data}  />} />

       
       
      </div>
    );
  }
}

export default App;


