// PizzaForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../Redux/Actions/Action';
import { Box, Button, InputLabel, MenuItem, Select } from '@mui/material';


const PizzaForm = () => {
  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  const [base, setBase] = useState('');
  const dispatch = useDispatch();
  const orders = useSelector(state => state.pizza.orders);
  const MAX_ORDERS = 10;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (orders.length < MAX_ORDERS) {
      dispatch(placeOrder({ type, size, base }));
      setType('');
      setSize('');
      setBase('');
    } else {
      alert('Not taking any orders for now. Maximum limit reached.');
    }
  };

  return (

    <Box height='600px'
      width='400px'
      my={4}
      display="flex"
      flexDirection='column'
      alignItems="center"
      gap={2}
      p={1}
      m={1}
      borderRadius={1}
      sx={{ background: '#96fff3' }}
    >
      <InputLabel id="demo-simple-select-label">Please make your Order Here!!!</InputLabel>
      <InputLabel id="demo-simple-select-label">Pick Type</InputLabel>
      <Select
       labelId="demo-simple-select-label"
        value={type}
        label="type"
        onChange={(e)=>{setType(e.target.value)}}
      >
        <MenuItem value='veg'>Veg</MenuItem>
        <MenuItem value='non-veg'>Non-Veg</MenuItem>
      </Select>

      <InputLabel id="demo-simple-select-label">Pick Size</InputLabel>
      <Select
        value={size}
        label="size"
        onChange={(e)=>{setSize(e.target.value)}}
      >
        <MenuItem value='large'>Large</MenuItem>
        <MenuItem value='medium'>Medium</MenuItem>
        <MenuItem value='small'>Small</MenuItem>
      </Select>

      <InputLabel id="demo-simple-select-label">Pick Base</InputLabel>
      <Select
        value={base}
        label="base"
        onChange={(e)=>{setBase(e.target.value)}}
      >
        <MenuItem value='thick'>Thick</MenuItem>
        <MenuItem value='thin'>Thin</MenuItem>
      </Select>
      <Button 
      variant='contained'
      onClick={handleSubmit}>Submit</Button>
    </Box>

  );
};

export default PizzaForm;
