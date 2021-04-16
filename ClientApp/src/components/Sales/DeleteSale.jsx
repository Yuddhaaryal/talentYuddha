import React, {useState} from 'react';
export const DeleteSale = (props) =>{
    const {salesId} = props;
    
    const [modalOpen,setmodalOpen] = useState(false);
    const handleOpen =()=>setmodalOpen(true);
    const handleClose =()=>setmodalOpen(false);
    
    const deleteSales = (id) =>{
        axios.delete(`/Sales/DeleteSales/${id}`)
        .then(response => {
          console.log(response);
          fetchSales();
        }
        ).
        catch(e=> console.log(e))
      }
    return(
        <div>
              <Button className="ui red button" onClick={handleOpen}><Icon name="delete calendar"/>Delete</Button>
                          <Modal  
                              open={modalOpen}
                              onClose={handleClose}
                              size={'mini'}
                          >
                            <Header>Delete Sale record from Table</Header>
                            <Modal.Content>
                              <p>Are you sure to delete a sale</p>
                            </Modal.Content>
                            <Modal.Actions>
                              <Button color='green' inverted onClick={() => {
                                deleteSales(salesId);
                                handleClose();
                              }
                              }>
                                <Icon name='checkmark' /> Yes
                              </Button>
                              <Button  color='red' inverted onClick={() => handleClose()}>
                                <Icon name='remove' /> No
                              </Button>
                            </Modal.Actions>
                          </Modal>
        </div>
    )

}
