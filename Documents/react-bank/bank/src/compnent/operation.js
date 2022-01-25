import React, { Component } from 'react';

class operation extends Component {
    constructor(){
        super()
        this.state={
            amount:null,
            vender:" ",
            category:" "
        }
    }
    render() {
        return (
            <div>
                    <input id='amount' type="number" placeholder='amount' value={this.state.amount} />
                    <input id='vendor' type="text" placeholder='vendor' value={this.state.vendor} />
                   <input id='category' type="text" placeholder='category' value={this.state.category} />
                   <button>Depsoit</button>
                   <button>Withdraw</button>
            </div>
        );
    }
}

export default operation;