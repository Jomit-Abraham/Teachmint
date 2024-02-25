import React from 'react';
import { useSelector } from 'react-redux';
import PizzaCard from './ReusableComponents/PizzaCard';
import { Box, Typography } from '@mui/material';

const PizzaList = () => {

  const stages=['Order Placed','Order in Making','Order Ready','Order Picked']
  const stageList = useSelector(state => state?.pizza?.orders);

  return (
    <Box sx={{display:'flex',background:'#96fff3',m:1,borderRadius:1,p:1}}>
      {
        stages.map((stage)=>
          <Box sx={{width:'200px',height:'auto',}} >
            <Typography>{stage}</Typography>
            {
            stageList.filter(order => order?.stage === stage).map((pizza)=><PizzaCard pizza={pizza}/>)
          }</Box>
        )
      }
    </Box>
  );
};

export default PizzaList;
