import {Modal,Form,FormField,Button} from 'semantic-ui-react';
import axios from 'axios';
import React, { useState } from "react";


const CreateSale =(props)=> {
  const {customers,products,stores,fetchSales} =props;

  const [customerId,setcustomerId] =useState(null);
  const [storeId,setstoreId] =useState(null);
  const [productId,setproductId] =useState(null);
  const [dateSold,setdateSold] =useState(new Date());
  const [modalOpen,setmodalOpen] = useState(false);
  const handleOpen = () => setmodalOpen(true);
  const handleClose = () => setmodalOpen(false);

  const  createSales = () => {
    axios.post('/Sales/PostSales/',{
        customerId: customerId,
        storeId: storeId,
        productId: productId,
        dateSold: dateSold
    })
    .then((res)=>{
        console.log(res.data);
        fetchSales();
    })
    .catch(e=>console.log(e))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    createSales();
  };
  return ( 
  <div>
    <Button primary onClick={handleOpen}>New Sales</Button>
    <Modal    open={modalOpen}
            onClose={handleClose}
            closeIcon>
      <Modal.Header>Create New Sell</Modal.Header>
      <Modal.Content>
        <Form onSubmit={(e) => {
            handleSubmit(e);
            handleClose();
        }}>
            <FormField>
              <label htmlFor="customerId">Customer</label>
              <select name="customerId" value={customerId} onChange={(e)=>setcustomerId(e.target.value)}>
                {customers.map(c =>
                      <option value={c.id}>{c.name}</option>
                )}
              </select>
            </FormField>
            <FormField>
            <label htmlFor="productId" >Product</label>
              <select  name="productId" value={productId} onChange={(e)=>setproductId(e.target.value)}>
                {products.map(p =>
                      <option value={p.id}>{p.name}</option>
                )}
              </select>
          </FormField>
          <FormField>
            <label htmlFor="storeId">Store</label>
              <select name="storeId" value={storeId} onChange={(e)=>setstoreId(e.target.value)}>
                { stores.map(s =>
                      <option value={s.id}>{s.name}</option>
                )}
              </select>

                </FormField> 
          <FormField>
            <label htmlFor="dateSold">Date Sold</label>
            <input
             
              type="text"
              name="dateSold"
              placeholder="Sold Date"
              value={dateSold}
              onChange={(e)=>setdateSold(e.target.value)}
            />
            </FormField>
           
            <Button type="submit">Create</Button>
        </Form>
      </Modal.Content>
    </Modal>
  </div>
      
      
  )
  }


export default CreateSale;

     
  
  






  