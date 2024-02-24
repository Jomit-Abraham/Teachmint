import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markPizzaAsPicked, cancelPizzaOrder } from '../Redux/Actions/Action';
import { Box } from '@mui/material';

const MainDisplay = () => {
  const dispatch = useDispatch();
  const pizzasInProgress = useSelector(state => state?.pizza?.orders.filter(order => order?.stage !== 'Order Picked'));
  const totalDeliveredToday = useSelector(state => state?.pizza?.totalDeliveredToday);

  

  const handleMarkAsPicked = (pizzaId) => {
    dispatch(markPizzaAsPicked(pizzaId));
  };

  const handleCancelOrder = (pizzaId) => {
    dispatch(cancelPizzaOrder(pizzaId));
  };

  return (
    <Box
    
    >
      <h2>Pizzas In Progress</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Type</th>
            <th>Size</th>
            <th>Base</th>
            <th>Stage</th>
            <th>Remaining Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pizzasInProgress.map(pizza => (
            <tr key={pizza.id}>
              <td>{pizza.id}</td>
              <td>{pizza.type}</td>
              <td>{pizza.size}</td>
              <td>{pizza.base}</td>
              <td>{pizza.stage}</td>
              <td>{pizza.remainingTime}</td>
              <td>
                {pizza.stage !== 'Order Ready' && (
                  <>
                    <button onClick={() => handleMarkAsPicked(pizza.id)}>Picked</button>
                  </>
                )}
                <button onClick={() => handleCancelOrder(pizza.id)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Total Pizza Delivered Today: {totalDeliveredToday}</h2>
      </div>
      </Box>
  );
};

export default MainDisplay;