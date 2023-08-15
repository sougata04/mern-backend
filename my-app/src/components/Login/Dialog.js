import { Dialog,Box,TextField,Typography, Button,styled } from "@mui/material";

import { useState ,useContext} from "react";

import { DataContext } from "../../context/DataProvider";


const Contained=styled(Box)`
    height:75vh;
    width:80vh;
    display:flex;
    
    

`

const Image=styled(Box)`
    background: #2874f0;
    height:100%;
    width:40%;
    text-align:center;
    color:white;
    padding:20px 20px;
`
const Wrapper=styled(Box)`
    display:flex;
    flex-direction:column;
    padding:25px 25px;
    & >div,&>button,&>p{
        margin-top:30px;
    }
    text-align:center;
`
const aIValue={

    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
        view:'signup',
        heading:'Looks like you are new here!',
        subHeading:'Sign up with your mobile number to get started',
    }
}

const LoginDialog = ({open,setOpen}) => {

  




    const handleClose=()=>{

        setOpen(false);
        setAccount(aIValue.login);
    }

    const [account,setAccount]=useState(aIValue.login);

    const { stAccount } = useContext(DataContext);

    const [email, setEmail] = useState(''); // State for email input
    const [password, setPassword] = useState(''); // State for password input


    const toggleAccount=()=>{

        setAccount(aIValue.signup);
    }
    // for handle login using userid and password

    const handleLogin = async (event) => {
      event.preventDefault();
      // http://localhost:9000
      try {
          const response = await fetch('/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username: email, password: password }),
          });

          if (response.ok) {
              const data = await response.json();
              setOpen(false);
              stAccount(data.firstName); // Set the logged-in user's name
              setEmail(''); // Clear email input
              setPassword(''); // Clear password input
          } else {
              console.log('Login failed');
              alert('invalid details entered')
          }
      } catch (error) {
          console.error('An error occurred:', error.message);
      }
  };

    // form value taken function

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        mobileNo: '',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

      const isValidEmail = (email) => {
        // Regular expression for email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
      };
    
      const handleSubmit =async (event) => {
        event.preventDefault();
        console.log('Form data:', formData);
        // check all the field are filled or not
        if (
            formData.firstName.trim() === '' ||
            formData.lastName.trim() === '' ||
            formData.email.trim() === '' ||
            formData.password.trim() === '' ||
            formData.mobileNo.trim() === ''
          ) {
            alert("Please fill in all fields.");
            return;
          }
        // validate email
        if (!isValidEmail(formData.email)) {
            alert("Please enter a valid email address.");
            setFormData((prevFormData) => ({
                ...prevFormData,
                email: '', // Clear the mobileNo field
            }));
            return;
          }
        
        // validate mobile no
        if (formData.mobileNo.length !== 10) {
            alert("Please enter a valid mobile number with at least 10 digits.");
            setFormData((prevFormData) => ({
                ...prevFormData,
                mobileNo: '', // Clear the mobileNo field
            }));
            return ;
          }
        try {
          // http://localhost:9000
            const response = await fetch('/submit', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
      
            if (response.ok) {
              console.log('Data saved successfully');
              setOpen(false);
              stAccount(formData.firstName);
            } else {
              console.log('Failed to save data');
            }
          } catch (error) {
            console.error('An error occurred:', error.message);
          }
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            mobileNo: '',
          });
      };



    return (
        <Dialog open={open} onClose={handleClose}>
            <Contained >
                <Image>
                    <h3 style={{color: '#f0f0f0'}}>{account.heading}</h3>
                    <h4 style={{color: '#f0f0f0'}}>{account.subHeading}</h4>
                </Image>
                { account.view==='login'?
                        <Wrapper>
                            <TextField
                              variant="standard"
                              placeholder="Enter Email/Mobile no"
                              value={email} // Bind to email state
                              onChange={(e) => setEmail(e.target.value)} // Update email state
                            />
                            <TextField
                                    variant="standard"
                                    placeholder="Enter Password"
                                    value={password} // Bind to password state
                                    onChange={(e) => setPassword(e.target.value)} // Update password state
                            />
                            <Typography>You agree to sougata's term of use and privacy policy</Typography>
                            <Button variant="contained" style={{textTransform:'none',background:'orange',boxShadow:'none'}} onClick={handleLogin}>Login</Button>
                            <Typography>OR</Typography>
                            <Button style={{backgroundColor: '#f4f4f4'}}>Request Otp</Button>
                            <Typography style={{color:'blue',padding:'10px',cursor:'pointer'}} onClick={toggleAccount}>New to Flipkart?Create an account</Typography>


                        </Wrapper>
                        :
                        
                            <form onSubmit={handleSubmit}>
                                <Wrapper>
                                <TextField
                                    variant="standard"
                                    placeholder="Enter First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    variant="standard"
                                    placeholder="Enter Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    variant="standard"
                                    placeholder="Enter Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    variant="standard"
                                    placeholder="Enter Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    variant="standard"
                                    placeholder="Enter Mobile No"
                                    name="mobileNo"
                                    value={formData.mobileNo}
                                    onChange={handleInputChange}
                                />
                                <Button type="submit" variant="contained" style={{backgroundColor: '#DB5500'}}>Continue</Button>
                                </Wrapper>
                            </form>
                            


                        

                }
            </Contained>
        </Dialog>
    );
};

export default LoginDialog;
