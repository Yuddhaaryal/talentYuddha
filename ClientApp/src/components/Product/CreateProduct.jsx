

import {Modal,Form,FormField,Button} from 'semantic-ui-react';
import axios from 'axios';
import React, {  useState } from "react";

const CreateProduct =(props) =>{
  const [productName, setproductName] = useState("");
  const [price, setPrice] = useState(0);
  const [modalOpen, setmodalOpen]= useState(false);
  const {fetchProducts} = props;

   
  const handleClose = () => setmodalOpen( false );
  const handleOpen = () => setmodalOpen(true);
 

const createProduct = () => {
      axios.post(`Products/PostProduct`,{
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
    e.preventDefault();
    createProduct();
  };

return (
  <div>
    <Button primary onClick={handleOpen}>New Product</Button>
    <Modal open={modalOpen}
          onClose={handleClose}
    > <Modal.Header>Create new product</Modal.Header>
      <Modal.Content>
          <Form onSubmit={(e) => {
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
                onChange={e =>setproductName(e.target.value)}
              />
              </FormField>
              <FormField>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                value={price}
                onChange={e =>setPrice(e.target.value)}
              />
              </FormField>
              <Button type="submit">Create</Button>
          </Form>
          </Modal.Content>
      </Modal>
  </div>
)
}


export default CreateProduct;

     
  
  






  