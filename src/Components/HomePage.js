import React from "react";
import PizzaForm from "./PizzaForm";
import MainDisplay from "./MainDisplay";
import { Box } from "@mui/material";
import PizzaList from "./PizzaList";

const HomePage=()=>{
    return(
        <Box
        sx={{background:'#7e9491'}}
        display='flex'
        >
            <PizzaForm/>
            <PizzaList/>
            <MainDisplay/>
        </Box>

    )
}

export default HomePage