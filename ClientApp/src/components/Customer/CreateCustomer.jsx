import axios from "axios";
import React,{ useState } from "react";
import {Modal,Button, Form, FormField} from 'semantic-ui-react';
export const CreateCustomer = (props) =>{
    const {fetchCustomers} = props;
    const [modalOpen, setmodalOpen] = useState(false);
    const [name,setName] = useState("");
    const [address, setAddress] = useState("");
    const handleClose =() =>setmodalOpen(false);
    const handleOpen = () => setmodalOpen(true);
    const createCustomer = () => {
        axios.post('/Customers/PostCustomer',{
            name: name,
            address: address
        })
        .then(r=>{
            console.log(r.data);
            fetchCustomers();
        })
        .catch(e=>console.log(e))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createCustomer();
    }
    return(
        <div>
            <Button primary onClick={handleOpen}>New Customer</Button>
            <Modal open={modalOpen}
                    closeIcon
                    onClose={handleClose}
            >
                <Modal.Header>Create New Customer</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={ (e)=>{ 
                        handleSubmit(e);
                        handleClose();
                        }}>
                        <FormField>
                        <label>Customer Name</label>
                        <input type="text"
                                name="name"
                                placeholder="Mr Aryal"
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
                        <Button primary>Create</Button>
                    </Form>
                </Modal.Content>
                

            </Modal>
        </div>
    )
}
