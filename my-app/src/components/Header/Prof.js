

import {Box,Typography,Menu,MenuItem} from '@mui/material';
import { useState } from 'react';


const Prof=({account,stAccount})=>{

    const [open,setOpen]=useState(false);

    const handleClick=(event)=>{
        setOpen(event.currentTarget);
    }
    const handleClose=()=>{
        setOpen(false);
    }
    const logOut=()=>{

        stAccount("");
        
    }


    return(
        <>
            <Box><Typography  style={{marginTop:'2px',cursor:'pointer'}}onClick={handleClick}>{account}</Typography></Box>

            <Menu
                
                anchorEl={open}
                open={Boolean(open)} 
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                >
                
                <MenuItem onClick={() => { handleClose(); logOut(); }}>Log out</MenuItem>
        </Menu>
        </>
    )
}

export default Prof;