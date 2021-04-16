import {Button,Form,FormField,Modal,Icon} from 'semantic-ui-react';
import axios from 'axios';
import React, { useState } from "react";


const EditSales = (props) => {
  const {fetchSaless,salesId,customers,products,stores} = props;
  const [customer, setCustomerId] =useState("");
  const [product, setProductId] = useState("");
  const [store,setStoreId] = useState("");
  const [dateSold, setdateSold] = useState("");
  const [modalOpen,setmodalOpen] = useState(false);
  const handleClose =() => setmodalOpen(false);
  const handleOpen =() => setmodalOpen(true);
  const editSales = (id) => {
    axios.put(`Sales/PutSale/${id}`,{
        id: salesId,
        customerId: customer,
        productId: store,
        storeId: product,
        dateSold: dateSold
    })
    .then((res)=>{
        console.log(res.data);
        fetchSaless();
    })
    .catch(e=>console.log(e))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    editSales(salesId);
  };
  return (  
    <div>
      <Button  color ="orange" onClick={handleOpen}><Icon name="edit"/>Edit</Button>
        <Modal  
              open={modalOpen}
              onClose={handleClose}
        >
        <Modal.Header>Edit sale</Modal.Header>
        <Modal.Content>
        <Form onSubmit={(e) => {
      handleSubmit(e);
      handleClose();
    }}>
      <FormField>
        <label htmlFor="customerId">Customer</label>
        <select name="customer" value={customer} onChange={(e)=>setCustomerId(e.target.value)}>
          {customers.map(c =>
                <option value={c.id}>{c.name}</option>
          )}
        </select>
      </FormField>
      <FormField>
      <label htmlFor="productId" >Product</label>
        <select  name="product" value={product} onChange={(e)=>setProductId(e.target.value)}>
          {products.map(p =>
                <option value={p.id}>{p.name}</option>
          )}
        </select>
    </FormField>
    <FormField>
      <label htmlFor="storeId">Store</label>
        <select name="store" value={store} onChange={(e)=>setStoreId(e.target.value)}>
          {stores.map(s =>
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
     
      <Button  primary type="submit">Edit</Button>
    </Form>
        </Modal.Content>
        </Modal>
    </div>
  
    );
  }


export default EditSales;

     
  
  






  