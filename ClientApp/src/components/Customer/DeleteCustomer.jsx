import axios from 'axios';
import React,{useState} from 'react';
import {Modal,Button,Icon} from 'semantic-ui-react';
export const DeleteCustomer = (props) => {
    const { customerId,fetchCustomers} = props;
    const [openModal, setopenModal] =useState(false);
    const handleClose = () => setopenModal(false);
    const handleOpen = () => setopenModal(true);
    const deleteCustomer =(id) =>{
        axios.delete(`/Customers/DeleteCustomer/${id}`)
        .then(res => {
            console.log(res);
            fetchCustomers();
        })
        .catch(e=>console.log(e));
    }
    return(
        <div>
            <Button className="ui red button" onClick={handleOpen}><Icon name="delete calendar"/>Delete</Button>
            <Modal open={openModal}
                    closeIcon
                    onClose={handleClose}
                    size={'mini'}>
                        
                    <Modal.Header>Are you Sure?</Modal.Header>
                    <Modal.Actions>
                        <Button inverted color="green" onClick={() =>{
                            handleClose(); 
                            deleteCustomer(customerId);
                            }}> 
                         <Icon name='checkmark'/> Yes
                        </Button>
                        <Button inverted color="red"onClick= {handleClose}>
                            <Icon name="remove" />No
                        </Button>
                    </Modal.Actions>
            </Modal>
        </div>
    )
}
