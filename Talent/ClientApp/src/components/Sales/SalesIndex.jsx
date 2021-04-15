import React, {Component} from 'react';
import axios from 'axios';
import CreateSale from './CreateSale';
import SalesTable from './SalesTable';

export class SalesIndex extends Component{
    constructor(props){
        super(props);
        this.state ={
        sales : [],
        products : [],
        customers : [],
        stores : []
     
        }

    }
    fetchSales = () => {
            axios.get('/Sales/GetSales')
    .then((res)=> {
        console.log(res.data);
        this.setState({
            sales :res.data,
            
        })
    })
    .catch((e)=> {
        console.log(e);
    });

    }
    fetchProducts = () => {
        axios.get('/Products/GetProducts')
.then((res)=> {
    console.log(res.data);
    this.setState({
        products :res.data,
        
    })
})
.catch((e)=> {
    console.log(e);
});

}
    fetchCustomers = () => {
        axios.get('/Customers/GetCustomer')
.then((res)=> {
    console.log(res.data);
    this.setState({
        customers :res.data,
        
    })
})
.catch((e)=> {
    console.log(e);
});

}
fetchStores = () => {
    axios.get('/Stores/GetStore')
.then((res)=> {
console.log(res.data);
this.setState({
    stores :res.data,
    
})
})
.catch((e)=> {
console.log(e);
});

}


  

    componentDidMount(){
        this.fetchSales();
        this.fetchProducts();
        this.fetchCustomers();
        this.fetchStores();


    }
    render(){
        const {sales,customers, products,stores} = this.state;
        return(
            <div>
            <CreateSale customers={customers} products ={products} stores={stores} fetchSales={this.fetchSales}/>
             <SalesTable sales ={sales} 
                        customers={customers} 
                        products ={products} 
                        stores={stores} 
                        fetchSales={this.fetchSales}
                        />
           </div>
            )
    }
}
