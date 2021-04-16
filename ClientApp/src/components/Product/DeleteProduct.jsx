export const DeleteProduct = (props) =>{
  const {productId,fetchProducts} = props;
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
    <div>
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
                              
                             deleteProduct(productId);
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
    </div>
  )
}
