
import {NavData} from "../../constrains/data";

import {Box,Typography,styled} from "@mui/material";

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
    alignItems: 'center',
    maxWidth: '1280px',
    margin: '0 auto 0', // Center the component by setting 'auto' for horizontal margin
    [theme.breakpoints.down('md')]: {
      
      alignItems: 'center',
      margin: '55px auto 0', // Adjust the margin for medium screens
      padding:'4px'
    },
  }));
const Com=styled(Box)`
   

    padding:12px 9px;

    
    
`

const NavBar=()=>{



    return(
        <Component>
            {
                NavData.map(data=>{
                    return(
                    <Com >
                        <img src={data.url} alt="nav" style={{widht:64 ,height:64}}/>
                        <Typography style={{fontSize:14,fontWeight:600, fontFamily:"inherit"}}>{data.text}</Typography>
                    </Com>
                    )
                })

            }
        </Component>
    )
}

export default NavBar;