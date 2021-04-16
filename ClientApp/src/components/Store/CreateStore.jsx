import React, {useState} from 'react';
import {Button,Form,Modal,FormField} from 'semantic-ui-react'
import axios from "axios";
export const CreateStore = (props) => {
    const {fetchStores} = props;
    const [openModal, setopenModal] =useState(false)
    const [name,setName]=useState("")
    const [address,setAddress]=useState("")
    const handleClose = () => setopenModal(false)
    const handleOpen = () => setopenModal(true)
    const createStore = () =>{
        axios.post(`/Stores/PostStore`,{
            name: name,
            address: address 
        })
        .then(res => {
            console.log(res);
            fetchStores();
        })
        .catch(e=>console.log(e))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createStore();

    }
    return(
        <div>
             <Button  primary onClick={handleOpen}>New Store</Button>
            <Modal open={openModal} closeIcon onClose={handleClose}>
                <Modal.Header>Create New Store</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={ (e)=>{ 
                        handleSubmit(e);
                        handleClose();
                        }}>
                        <FormField>
                        <label>Store Name</label>
                        <input type="text"
                                name="name"
                                placeholder="Eg Richmond"
                                value={name}
                                onChange= {(e)=>setName(e.target.value)}
                        />
                        </FormField>
                        <FormField>
                        <label>Address</label>
                        <input type="text"
                        name="address"
                                placeholder="Melbourne"
                                value={address}
                                onChange= {(e)=>setAddress(e.target.value)}
                        />
                        </FormField>
                        <Button>Create</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </div>
    )
}