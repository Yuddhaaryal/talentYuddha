import axios from 'axios';
import React,{useState} from 'react';
import {Modal,Button,Icon} from 'semantic-ui-react';
export const DeleteStore = (props) => {
    const { storeId,fetchStores} = props;
    const [openModal, setopenModal] =useState(false);
    const handleClose = () => setopenModal(false);
    const handleOpen = () => setopenModal(true);
    const deleteStore =(id) =>{
        axios.delete(`/Stores/DeleteStore/${id}`)
        .then(res => {
            console.log(res);
            fetchStores();
        })
        .catch(e=>console.log(e));
    }
    return(
        <div>
              <Button className="ui red button" onClick={handleOpen}><Icon name="delete calendar"/>Delete</Button>
            <Modal open={openModal}
                    closeIcon
                    onClose={handleClose}
                    size={'mini'}
                    >
                    <Modal.Header>Are you Sure?</Modal.Header>
                    <Modal.Actions>
                        <Button inverted color="green" onClick={() =>{
                            handleClose(); 
                            deleteStore(storeId);
                            }}> 
                         <Icon name='checkmark'/> Yes
                        </Button>
                        <Button inverted color="red" onClick={handleClose}>
                            <Icon name="remove" />No
                        </Button>
                    </Modal.Actions>
            </Modal>
        </div>
    )
}
