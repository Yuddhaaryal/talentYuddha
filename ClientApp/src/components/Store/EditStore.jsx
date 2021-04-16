
import axios from 'axios';
import React, { useState } from "react";
import { Modal,Form,FormField,Button,Icon} from 'semantic-ui-react';


export const EditStore= (props)=>{
  const {fetchStores,storeId} = props;
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const [modalOpen, setmodalOpen]= useState(false);
  
   const handleClose = () => setmodalOpen( false );
   const handleOpen = () => setmodalOpen(true);

 
  
  const editStore = (id) => {
    axios.put(`Stores/PutStore/${id}`,{
        id:storeId,
        name: name,
        address: address
    })
    .then((res)=>{
        console.log(res.data);
        fetchStores();
    })
    .catch(e=>console.log(e))
  }
  const handleSubmit = (e) => {

    e.preventDefault();;
    editStore(storeId);
  };
  return (
      <div>
          <Button className="ui orange button" onClick={handleOpen}> <Icon name="edit"/>Edit</Button>
          <Modal open={modalOpen}
                closeIcon
                onClose={handleClose}
            >
                <Modal.Header>Edit Store</Modal.Header>
                <Modal.Content>
                    <Form
                    onSubmit={(e) => {
                    handleSubmit(e);
                    handleClose();
                    }}>
                    <FormField>
                    <label htmlFor="name">Store Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Store Name"
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


export default EditStore;

     
  
  






  