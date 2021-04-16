import axios from 'axios';
import React, {useState} from 'react';
import EditSales from './EditSales';
import{Table,TableCell,Header,Button,Icon,TableRow,Modal} from 'semantic-ui-react';

const SalesTable = (props) => {
    const {sales,fetchSales,customers,products,stores} = props;

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
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Customer</Table.HeaderCell>
                <Table.HeaderCell>Product</Table.HeaderCell>
                <Table.HeaderCell>Store</Table.HeaderCell>
                <Table.HeaderCell>Date Sold</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>

            </Table.Row>
            </Table.Header>
      
          <Table.Body>
            {sales.map(s=>{
              return(
                <TableRow id={s.id}  >
                  <TableCell>{s.customer.name}</TableCell>
                  <TableCell>{s.product.name}</TableCell>
                  <TableCell>{s.store.name}</TableCell>
                  <TableCell>{s.dateSold}</TableCell>
                
              
                  <TableCell>
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
                                deleteSales(s.id);
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
                  </TableCell>

                  <TableCell>
                    <EditSales salesId={s.id}
                                   fetchSales={fetchSales} 
                                   customers={customers}
                                   products={products}
                                   stores={stores}/>
                  </TableCell>
                </TableRow>
              )
              })}
          </Table.Body>
          </Table>
          )


      }
export default SalesTable