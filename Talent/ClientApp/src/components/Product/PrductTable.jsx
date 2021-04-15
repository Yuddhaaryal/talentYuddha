import axios from 'axios';

import React, {useState} from 'react';
import { Icon,Header, Table, TableCell, TableRow,Modal, Button} from 'semantic-ui-react';
import EditProduct from './EditProduct';

const PrductTable = (props) => {
    const {products,fetchProducts} = props;

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true);
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false);
    }
    const deleteProduct = (id) =>{
      axios.delete(`/Products/DeleteProduct/${id}`)
      .then(response => {
        console.log(response);
        fetchProducts();
      }
      ).
      catch(e=> console.log(e))
    }
    return(
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Product Name</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
            </Table.Header>
      
          <Table.Body>
            {products.map(p=>{
              return(
                <TableRow id={p.id}  >
                  <TableCell>{p.name}</TableCell>
                  <TableCell>{p.price}</TableCell>
              
                  <TableCell>
                  <Button className="ui red button" onClick={setModalIsOpenToTrue}><Icon name="delete calendar"/>Delete</Button>
                          <Modal  
                                  open={modalIsOpen}
                                  onClose={setModalIsOpenToFalse}
                                  size={'mini'}
                                      >
                            <Header>Delete Product from Table</Header>
                            <Modal.Content>
                              <p>Are you sure to delete a product</p>
                            </Modal.Content>
                            <Modal.Actions>
                              <Button color='green' inverted onClick={() => {
                              
                             deleteProduct(p.id);
                             setModalIsOpenToFalse();
                              }
                              }>
                                <Icon name='checkmark' /> Yes
                              </Button>
                              <Button  color='red' inverted onClick={() => setModalIsOpenToFalse()}>
                                <Icon name='remove' /> No
                              </Button>
                             

                            </Modal.Actions>
                            
                              
                          </Modal>
                  </TableCell>

                  <TableCell>
                         
                          <EditProduct  productId={p.id} fetchProducts={fetchProducts} />
                        
                  </TableCell>
                </TableRow>
              )
              })}
          </Table.Body>
          </Table>
          )


      }
export default PrductTable