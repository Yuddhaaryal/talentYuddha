
import axios from 'axios';
import React, { useState } from "react";
import { Modal,Form,FormField,Button,Icon} from 'semantic-ui-react';


export const EditCustomer= (props)=>{
  const {fetchCustomers,customerId} = props;
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const [modalOpen, setmodalOpen]= useState(false);
  
   const handleClose = () => setmodalOpen( false );
   const handleOpen = () => setmodalOpen(true);

 
  
  const editCustomer = (id) => {
    axios.put(`Customers/PutCustomer/${id}`,{
        id:customerId,
        name: name,
        address: address
    })
    .then((res)=>{
        console.log(res.data);
        fetchCustomers();
    })
    .catch(e=>console.log(e))
  }
  const handleSubmit = (e) => {

    e.preventDefault();;
    editCustomer(customerId);
  };
  return (
      <div>
          <Button className="ui orange button" onClick={handleOpen}> <Icon name="edit"/>Edit</Button>
          <Modal open={modalOpen}
                closeIcon
                onClose={handleClose}
            >
                <Modal.Header>Edit Customer</Modal.Header>
                <Modal.Content>
                    <Form
                    onSubmit={(e) => {
                    handleSubmit(e);
                    handleClose();
                    }}>
                    <FormField>
                    <label htmlFor="name">Customer Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Custyomer Name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    </FormField>
                    <FormField>
                    <label htmlFor="address">address</label>
                    <input
                    
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    />
                    </FormField>
                    <Button primary type="submit">Edit</Button>
                </Form>
            </Modal.Content>

          </Modal>
      </div>
       
    );
  }


export default EditCustomer;

     
  
  






  