import React, {useState} from 'react';
import {Table, TableCell,Menu,Icon} from 'semantic-ui-react';
import {DeleteCustomer} from './DeleteCustomer';
import {EditCustomer} from './EditCustomer';
export const CustomerTable = (props) => {
    const { customers, fetchCustomers} = props;
    return(
      
       <Table celled>
           <Table.Header>
               <Table.Row>
                   <Table.HeaderCell>Name</Table.HeaderCell>
                   <Table.HeaderCell>Address</Table.HeaderCell>
                   <Table.HeaderCell>Actions</Table.HeaderCell>
                   <Table.HeaderCell>Actions</Table.HeaderCell>
               </Table.Row>
           </Table.Header>
           <Table.Body>
               {customers.map(c=>
               <Table.Row>
                    <TableCell>{c.name}</TableCell>
                    <TableCell>{c.address}</TableCell>
                    <TableCell>{<DeleteCustomer customerId={c.id} fetchCustomers={fetchCustomers}/>}</TableCell>
                    <TableCell >
                        <EditCustomer customerId={c.id} customers={customers} fetchCustomers={fetchCustomers}/>
                    </TableCell>
                    
                    
               </Table.Row>)}
           </Table.Body>
     
       </Table>
       /* <div>
       <Menu.Item as='a'>10</Menu.Item>
       <Menu.Item as='a' icon>
              <Icon name='chevron down' />
        </Menu.Item>
        </div> */
    
    )
}