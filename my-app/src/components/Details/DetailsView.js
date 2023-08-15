import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../redux/actions/GetProductDetails"

import Items from "./Items"
import { Box,Typography,styled } from "@mui/material";

import ProductDescription from "./productDescription"


const Wrapper=styled(Box)(({theme})=>({


  [theme.breakpoints.down("sm")]:{

    flexDirection:'column',

    marginLeft:'auto',
    padding:'14px',
  }

}));



const DetailsView = () => {
    const { productId } = useParams(); // Get the productId from the URL
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails); // Assuming you have a reducer for productDetails
    console.log(productDetails);
  
    useEffect(() => {
      dispatch(getProductDetails(productId)); // Dispatch the action to fetch product details based on productId
    }, [dispatch, productId]);
  // Check if productDetails is available and has price property before accessing its properties
  if (!productDetails || !productDetails.price) {
    return  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
    <Typography variant="h6">Loading...</Typography>
  </div>
  }



  
    return (
      <Wrapper style={{background:'#f2f2f2',display:'flex'}}>
        <Box>
          <Items productDetails={productDetails}/>
        </Box>
        
        <Box style={{marginTop:'55px'}}>
          <Typography>{productDetails.title.longTitle}</Typography>
          <Typography style={{marginTop:'4px',color:'#878787',fontSize: '20px'}}>8 Ratings & 7 Reviews
            <Box component="span" style={{marginLeft: '12px',verticalAlign: 'middle',fontSize: '20px'}}><img style={{height:'30px'}} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"alt="hello"/></Box>
          </Typography>
          <Box component="span" style={{fontSize:28}}>₹{productDetails.price.cost}</Box>&nbsp;&nbsp;&nbsp;
          <Box component="span" ><strike>₹{productDetails.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
          <Box component="span" >₹{productDetails.price.discount}</Box>&nbsp;&nbsp;&nbsp;

          <ProductDescription />

        </Box>
        
      </Wrapper>
    );
  }
  
  export default DetailsView;
  