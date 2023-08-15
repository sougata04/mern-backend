
import { useState,useContext } from "react";

import {Box,Button,Typography,styled} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import LoginDialog from '../Login/Dialog';

import { DataContext } from "../../context/DataProvider";
import Prof from "./Prof";

import { Link } from "react-router-dom";








// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { GoogleLogin } from '@react-oauth/google';




const LBut = styled(Button)`
    color: #2874f0;
    background: #ffffff;
    padding: 5px 40px;
    font-weight: 600;
    height: 32px;
    border-radius: 2px;
    box-shadow:none 
`;

const NewWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '40px',
    '& > Button, & > p, & > div': {
      marginRight: '40px',
      fontSize: '16px',
      fontWeight: '400',
    },
  
    [theme.breakpoints.down('md')]: {
      flexDirection:'column',   
      display:'block',   
    },
  }));
//   const Wrap=styled('Box')(({theme})=>({

//     [theme.breakpoints.down('md')]:{
//         display:'none',
//     }

//   }));



const CustomBotton=()=>{

    const  [open,setOpen]=useState(false);

    const {account,stAccount}=useContext(DataContext);

    const openDialog=()=>{
        setOpen(true);
    }


    return (
        <Box>
        <NewWrapper style={{display:"flex"}}>
            
            
            {

                account?<Prof account={account} stAccount={stAccount}/>
                :

                <LBut variant="contained" onClick={openDialog}>Login</LBut>

            }
             

                        {/* will implement it later using google for now do it simple  */}
                        {/* Replace the existing Login button with Google Sign-In */}
                        {/* <GoogleOAuthProvider clientId="847640955134-8lltf844j4v0o0v15vvm5afeo07kg00b.apps.googleusercontent.com">
                        <GoogleLogin
                    onSuccess={async credentialResponse => {
                        try {
                            const { profile } = credentialResponse;
                            const userDetails = {
                                name: profile.name,
                                email: profile.email,
                                profilePicture: profile.picture,
                            };

                            // Make an API call to store user details in the database
                            const response = await fetch('/api/store-user', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(userDetails),
                            });

                            if (response.ok) {
                                console.log('User details stored in the database.');
                            } else {
                                console.log('Failed to store user details.');
                            }
                        } catch (error) {
                            console.error('An error occurred:', error);
                        }
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
                        
                        </GoogleOAuthProvider> */}

            
            
            <Link to='/seller' style={{margin:'1px 10px',textDecoration:'none',color:'inherit'}}>Become a seller</Link>
            <Typography style={{margin:'1px 10px'}}>More</Typography>
            <Link to='/cart' style={{display:"flex",margin:'1px 10px',textDecoration:'none',color:'inherit'}}>
                <ShoppingCartIcon/>
                <Typography>Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen}></LoginDialog>
            
        </NewWrapper>
        </Box>
    )
}

export default CustomBotton;

