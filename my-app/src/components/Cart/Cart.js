



import {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartAction";



import { Typography,Box,Button,Divider,styled } from "@mui/material";



const Wrapper=styled(Box)(({theme})=>({

  margin:'20px',
  display:'flex',

  [theme.breakpoints.down("md")]:{
    flexDirection:'column',
    height:'fit-content',
    width:'fit-content',
  },

}))
const Bo=styled(Box)(({theme})=>({

  marginLeft:100,

  [theme.breakpoints.down("md")]:{
    margin:0,
    width:'1000px',
  },

}))


   


const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const [quantity, setQuantity] = useState({});

  const handleIncrement = (productId) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: (prevQuantity[productId] || 1) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: Math.max((prevQuantity[productId] || 1) - 1, 0),
    }));
  };
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price.cost * (quantity[item.id] || 1);
    });
    return total;
  };

  const calculateTotalMrp = () => {
    let totalMrp = 0;
    cartItems.forEach((item) => {
      totalMrp += item.price.mrp * (quantity[item.id] || 1);
    });
    return totalMrp;
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
    <div>
      <h2>Your Cart</h2>
      <Divider />
      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <Wrapper>
            <Bo >
          {cartItems.map((item) => (
            <Box key={item.id} display="flex" alignItems="center" py={1}>
              <img src={item.url} alt={item.title.shortTitle} style={{ width: "150px", marginRight: "50px" }}/>
              <div>
                    <Typography variant="subtitle1"> {item.title.longTitle} </Typography>
                    <Typography variant="subtitle1"> {item.title.shortTitle} </Typography>
                    <Box>
                    <Typography style={{marginTop:'4px',color:'#878787',fontSize: '20px'}}>8 Ratings & 7 Reviews
                        <Box component="span" style={{marginLeft: '12px',verticalAlign: 'middle',fontSize: '20px'}}><img style={{height:'30px'}} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"alt="hello"/></Box>
                        </Typography>
                        <Box component="span" style={{fontSize:28}}>₹{item.price.cost * (quantity[item.id] || 1)}</Box>&nbsp;&nbsp;&nbsp;
                        <Box component="span" ><strike>{item.price.mrp * (quantity[item.id] || 1)}</strike></Box>&nbsp;&nbsp;&nbsp;
                        <Box component="span" >{item.price.discount}</Box>&nbsp;&nbsp;&nbsp;
                    

                    <Button variant="contained" color="error" size="small" onClick={() => handleRemoveFromCart(item.id)} >Remove
                    </Button>&nbsp;&nbsp;
                    
                    <Button variant="outlined" size="small" onClick={()=>handleDecrement(item.id)}> -</Button>&nbsp;&nbsp;
                    
                    {quantity[item.id] || 1}&nbsp;&nbsp;
                    <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleIncrement(item.id)}
                    >
                    +
                    </Button>
                    </Box>

                   
              </div>
            </Box>
          ))}
         
            <Divider />
            
            <Button type="contained" style={{background:'orange',color:'white',margin:'40px 300px'}} onClick={()=>{handlePayment(calculateTotal())}}>Place Order</Button>
            </Bo>
            <Box style={{color:'white',padding:'10px',margin:'10px 100px',background:'grey',height:'fit-content',width:'400px'}}>
            <h4>PRICE DETAILS</h4> <Divider/>
           <Typography style={{margin:'5px'}}>total price: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹ {calculateTotal()}</Typography>
           <Typography style={{margin:'5px'}}>total mrp: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹ {calculateTotalMrp()}</Typography>
           <Typography style={{margin:'5px',color:'white'}}> total discount:&nbsp;&nbsp;&nbsp;&nbsp; ₹ {calculateTotalMrp()-calculateTotal()}</Typography>

           <Typography style={{margin:'5px',}}>delivery charges:&nbsp;&nbsp;&nbsp;&nbsp; ₹ 40</Typography>
           <Divider style={{color:'red'}}/>

           <Typography style={{margin:'5px',color:'white'}}>Pay only:&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; ₹ {calculateTotal()+40}</Typography>

           </Box>
           
        </Wrapper>
      )}
    </div>
  );
};

export default Cart;
