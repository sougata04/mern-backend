
import React from "react";

import {Box} from "@mui/material"




import Header from "./components/Header/Header";

import Home from "./components/Home/Home"

import DataProvider from "./context/DataProvider";

import {BrowserRouter,Routes,Route} from "react-router-dom"

import DetailsView from "./components/Details/DetailsView";

import Cart from "./components/Cart/Cart";

import Seller from "./components/Seller/Seller"


function App() {
  
  return (
    <DataProvider>
      <BrowserRouter>
        <Header></Header>

        <Box style={{marginTop:"56px"}}>
          <Routes>
          <Route path='/' element={<Home/>}/>
          
          <Route path='/product/:productId'element={<DetailsView/>}/>
          <Route path='/cart' element={<Cart/>}/>   
          <Route path='/seller' element={<Seller/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
