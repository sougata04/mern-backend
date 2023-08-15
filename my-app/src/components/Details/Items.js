import React from "react";
import { Box, Button, styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction"; // Make sure you import the correct path
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const Left = styled(Box)`
  padding: 40px 0 0 80px;
  min-width: 40%;
`;

const Image = styled("img")({
  padding: "15px 20px",
  border: "1px solid #f0f0f0",
  width: "50vh",
  height: "auto",
});

const Items = ({ productDetails }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addCart = () => {
    // Dispatch action to add the product to the cart
    
    dispatch(addToCart(productDetails));

    // Navigate to the cart page
    navigate("/cart");
  };

  const handleOpenrazorpay=(amount)=>{

    const options={key: "rzp_test_kYxxcqqYjBzid5", 
    "amount": Number(amount.amount)  , // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Sougata Ghosh",
    "description": "Test Transaction",
    }
    const rzp=new window.Razorpay(options)
    rzp.open()
  }

  const handlePayment = (amount) => {
    const data = { amount: amount };
    // http://localhost:9000
    fetch("/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);

        handleOpenrazorpay(data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  

  return (
    <Box>
      <Left>
        <Image src={productDetails.url} alt="sougata" />
      </Left>
      <Link to='/cart' 
        variant="contained"
        style={{ background: "#fb641b", padding: "10px", marginLeft: "100px", marginRight: "40px" ,textDecoration:'none',color:'white' }}
        onClick={addCart}
      >
        Add to Cart
      </Link>
      <Button variant="contained" style={{ background: "#fb641b", padding: "10px", marginRight: "80px" }} onClick={()=>handlePayment(productDetails.price.cost)}>
        Buy Now
      </Button>
    </Box>
  );
};

export default Items;
