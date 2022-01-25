import React, { Component } from 'react';
import Transaction from '../server/transaction';

class transcations extends Component {
    render() {
        return (
            <div>
                <Transaction data ={this.props.data}/>
            </div>
        );
    }
}

export default transcations;