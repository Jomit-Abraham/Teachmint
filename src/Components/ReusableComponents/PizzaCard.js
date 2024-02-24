import { Button, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import {  useDispatch } from 'react-redux';
import { movePizzaToNextStage } from '../../Redux/Actions/Action';


const PizzaCard = (props) => {

    const dispatch = useDispatch();

    const handleMoveToNextStage = (pizzaId) => {
        dispatch(movePizzaToNextStage(pizzaId));
      };
    console.log(props)
    const {pizza}=props
  //const classes = useStyles({ isStale: pizza.timeInStage > 180 }); // Check if pizza is stale

  return (
    <Card sx={{width:'150px', height:'auto'}}>
      <CardContent>
        <Typography variant="h6">
          Pizza No{pizza.id}
        </Typography>
        <Typography variant="body2">
         {pizza.timeInStage} seconds
        </Typography>
        <Button sx={{variant:'contained'}} onClick={()=>handleMoveToNextStage(pizza.id) }>Next</Button>
      </CardContent>
    </Card>
  );
};

export default PizzaCard;