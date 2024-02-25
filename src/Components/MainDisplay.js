import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelPizzaOrder } from '../Redux/Actions/Action';
import { Box, Typography } from '@mui/material';
import Table from './ReusableComponents/Table'

const MainDisplay = () => {
  const dispatch = useDispatch();
  const pizzasInProgress = useSelector(state => state?.pizza?.orders.filter(order => order?.stage !== 'Order Picked'));
  const totalDeliveredToday = useSelector(state => state?.pizza?.totalDeliveredToday);





  const handleCancelOrder = (pizzaId) => {
    dispatch(cancelPizzaOrder(pizzaId));
  };

  const headers=['Order ID','Stage','Total time spent','Action']

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: '#96fff3',
        m: 1,
        borderRadius: 1,
        p: 1
      }}
    >

    <Typography mb={3}>Order In progress</Typography>

      <Table
       headers={headers} 
       orders={pizzasInProgress}
       handleCancelOrder={handleCancelOrder} />

       <Typography mt={3}>Total Pizza Delivered Today: {totalDeliveredToday}</Typography>

    </Box>
  );
};

export default MainDisplay;