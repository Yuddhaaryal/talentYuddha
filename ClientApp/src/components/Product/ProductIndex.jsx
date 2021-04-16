import React, {Component} from 'react';
import axios from 'axios';
import PrductTable from './PrductTable';
import CreateProduct from './CreateProduct';

export class ProductIndex extends Component{
    constructor(props){
        super(props);
        this.state ={
        products : [],
     
        }

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


  

    componentDidMount(){
        this.fetchProducts();

    }
    render(){
        const {products} = this.state;
        return(
            <div>
                <CreateProduct fetchProducts={this.fetchProducts}/>
                <PrductTable products ={products} fetchProducts={this.fetchProducts}/>
           </div>
            )
    }
}
