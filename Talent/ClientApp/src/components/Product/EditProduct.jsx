

import {Modal,Form,FormField,Button,Icon} from 'semantic-ui-react';
import axios from 'axios';
import React, { useState } from "react";

const EditProduct= (props)=>{
  const {fetchProducts,productId} = props;
  const [productName, setproductName] = useState("");
  const [price, setPrice] = useState(0);
  const [modalOpen,setModalOpen] = useState(false);
  const handleOpen =() => setModalOpen(true);
  const handleClose =( )=> setModalOpen(false);
 
  
  const editProduct = (id) => {
    axios.put(`Products/PutProduct/${id}`,{
        id:productId,
        name: productName,
        price: price
    })
    .then((res)=>{
        console.log(res.data);
        fetchProducts();
    })
    .catch(e=>console.log(e))
  }
  const handleSubmit = (e) => {
    console.log("I am reached")
    e.preventDefault();;
    editProduct(productId);
  };
  return (<div>
    <Button color="orange" onClick={handleOpen}><Icon name="edit"/>Edit</Button>
    <Modal    open={modalOpen}
               closeIcon
              onClose={handleClose}>
                <Modal.Header>Edit Product</Modal.Header>
              <Modal.Content>
          <Form
            onSubmit={(e) => {
            handleSubmit(e);
            handleClose();
      
          }}>
            <FormField>
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              value={productName}
              onChange={(e)=>setproductName(e.target.value)}
            />
            </FormField>
            <FormField>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
            />
            </FormField>
            <Button  primary type="submit">Edit</Button>
          </Form>
          </Modal.Content>
          </Modal>
          </div>
    );
  }


export default EditProduct;

     
  
  






  