import React, {useState} from 'react';
import {Table, TableCell} from 'semantic-ui-react';
import {DeleteStore} from './DeleteStore';
import {EditStore} from './EditStore';
export const StoreTable = (props) => {
    const { stores, fetchStores} = props;
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
               {stores.map(s=>
               <Table.Row>
                    <TableCell>{s.name}</TableCell>
                    <TableCell>{s.address}</TableCell>
                    <TableCell>{<DeleteStore storeId={s.id} fetchStores={fetchStores}/>}</TableCell>
                    <TableCell >
                        <EditStore storeId={s.id} stores={stores} fetchStores={fetchStores}/>
                    </TableCell>
                    
               </Table.Row>)}
           </Table.Body>
       </Table>
    )
}