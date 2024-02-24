import React from 'react';
import { useSelector } from 'react-redux';
import PizzaCard from './ReusableComponents/PizzaCard';
import { Box, Typography } from '@mui/material';

const PizzaList = () => {

  const stages=['Order Placed','Order in Making','Order Ready','Order Picked']
  const stageList = useSelector(state => state?.pizza?.orders);
   const Making = useSelector(state => state?.pizza?.orders.filter(order => order?.stage === 'Order in Making'));
  // const Ready = useSelector(state => state.pizza.orders.filter(order => order.stage === 'Order Ready'));
  // const Picked = useSelector(state => state.pizza.orders.filter(order => order.stage === 'Order Picked'));
  
  
  const calculateTimeDifference = (startTime) => {
    const currentTime = new Date();
    const difference = Math.floor((currentTime - startTime) / 1000); // in seconds
    return difference;
  };

  return (
    <Box sx={{display:'flex',background:'#96fff3',m:1,borderRadius:1,p:1}}>
      {
        stages.map((stage)=>
          <Box sx={{width:'200px',height:'auto'}} >
            <Typography>{stage}</Typography>
            {
            stageList.filter(order => order?.stage === stage).map((pizza)=><PizzaCard pizza={pizza}/>)
          }</Box>
        )
      }
      
        {/* {pizzas.map(pizza => 
         const timeElapsed = calculateTimeDifference(pizza.startTime);
          const highlightClass = timeElapsed > 180 ? 'highlight' : '';
<PizzaCard pizza={pizza}/>
           
        )} */}
      
    </Box>
  );
};

export default PizzaList;
