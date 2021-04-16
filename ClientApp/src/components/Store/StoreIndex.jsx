import axios from 'axios';
import React, {Component} from 'react'
import {CreateStore} from './CreateStore'
import {StoreTable} from './StoreTable'

export class StoreIndex extends Component{
    constructor(props){
        super(props);
        this.state ={
            stores: []
        }
    }
    fetchStores =() => {
        axios.get(`/Stores/GetStore`)
        .then(res => {
            console.log(res);
            this.setState({ stores: res.data});
           
        })
        .catch(e =>console.log(e))
    }
    componentDidMount(){
        this.fetchStores();
    }
    render(){
        const {stores} = this.state;
        return(
            <div>
                <CreateStore fetchStores={this.fetchStores}/>
                <StoreTable fetchStores={this.fetchStores} stores={stores}/>
            </div>
        )
    }
}
