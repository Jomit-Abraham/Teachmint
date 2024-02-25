import React from "react";
import PizzaForm from "./PizzaForm";
import MainDisplay from "./MainDisplay";
import { Box } from "@mui/material";
import PizzaList from "./PizzaList";

const HomePage=()=>{
    return(
        <Box height="100vh"
        sx={{background:'#148785'}}
        display='flex'
        >
            <PizzaForm/>
            <PizzaList/>
            <MainDisplay/>
        </Box>

    )
}

export default HomePage