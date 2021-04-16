import axios from "axios";
import React, {Component} from "react";
import {CreateCustomer} from './CreateCustomer';
import {CustomerTable} from './CustomerTable';
class CustomerIndex extends Component {
    constructor(props){
        super(props)
        this.state ={
            customers :[]
        }
    }
   
    fetchCustomers = () => {
        axios.get('/Customers/GetCustomer')
        .then(res => {
            console.log(res.data);
            this.setState({
                customers: res.data
            })
            })
        .catch(e=>console.log(e))
    }
    componentDidMount(){
        this.fetchCustomers();
    }
    render(){
        const {customers} = this.state
        return(
            <div>
                <div margin={10}>
                <CreateCustomer  fetchCustomers={this.fetchCustomers}/>
                </div>
        
                <CustomerTable  customers={customers} fetchCustomers={this.fetchCustomers}/>
            </div>
        )
    }
}
export default CustomerIndex