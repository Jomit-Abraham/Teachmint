import { Table, TableContainer, TableHead, TableRow, TableCell, Button, TableBody } from '@mui/material';
import React from 'react';
import CustomTableCell from './CustomTableCell';


const OrderTable = (props) => {
  return (
    <TableContainer >
      <Table>
        <TableHead>
          <TableRow>
            {props?.headers?.map((header,index) => (<TableCell>{header}</TableCell>))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props?.orders?.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.stage}</TableCell>
              <CustomTableCell isActive={order.stage === 'Order in Making' ? false : true} />
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => props?.handleCancelOrder(order.id)}>Cancel</Button>
                {/* You can add more actions/buttons here */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
