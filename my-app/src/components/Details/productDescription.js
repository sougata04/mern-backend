


import React from "react";
import { Box, Typography,Container, Divider } from "@mui/material";

import { useSelector } from "react-redux";

const ProductDescription = () => {

  const productDetails = useSelector(state => state.productDetails);
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box>
        <Typography variant="h6" sx={{ mb: 2 }} style={{color:'blue'}}>
          Highlights
        </Typography>
        <Typography variant="body1" style={{color:'orange'}}>
          8 GB RAM | 128 GB ROM | Expandable Upto 1 TB
        </Typography>
        <Typography variant="body1">
          16.51 cm (6.5 inch) Full HD+ Display
        </Typography>
        <Typography variant="body1">50MP + 8MP | 16MP Front Camera</Typography>
        <Typography variant="body1">5000 mAh Battery</Typography>
        <Typography variant="body1">Mediatek Dimensity 930 Processor</Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Easy Payment Options
        </Typography>
        <Typography variant="body1">EMI starting from ₹598/month</Typography>
        <Typography variant="body1">Cash on Delivery</Typography>
        <Typography variant="body1">
          Net banking & Credit/ Debit/ ATM card
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          
        </Typography>
        <Typography variant="body1">{productDetails.description} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          
        </Typography>
        
      </Box>
      <Divider sx={{ my: 2 }} />
      
    </Container>
  );
};

export default ProductDescription;
