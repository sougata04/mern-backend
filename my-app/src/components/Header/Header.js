




import { AppBar,Box,Toolbar,Typography,styled } from "@mui/material";

import Search from "./Search";

import { useState } from "react";

import CustomBotton from "./CustomBotton";

import { Link } from "react-router-dom";

import { IconButton, Drawer} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';


const StyledHeader=styled(AppBar)`
    background:#2874f0;
    height:55px;
`
const Component=styled(Link)`
    margin-left:12%;
    text-decoration:none;
    color:inherit;
`
const Explore=styled(Typography)`
    font-size:10px;
    font-style:italic;
`
const PlusImage=styled('img')({
    width:10,
    height:10,
});
const Wrapper=styled(Box)(({theme})=>({
    display:'flex',

    [theme.breakpoints.down('md')]:{

        display:'none', 
    },

}));
const Three=styled(IconButton)(({theme})=>({
        display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block',
        flexDirection:'column',
    },

}));





const Header=()=>{
    
    const loginURL='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const imageURL='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png';

    const [menuAnchor, setMenuAnchor] = useState(false);

    const handleMenuOpen = (event) => {
        setMenuAnchor(event.currentTarget);
        };

    const handleMenuClose = () => {
           setMenuAnchor(false);
    };

    


    return (

        


        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
                <Three
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenuOpen}
                    >   
                    <MenuIcon />
                </Three>

                <Drawer   anchorEl={menuAnchor}
                    open={menuAnchor}
                    onClose={handleMenuClose}><CustomBotton /></Drawer>

                <Component to={`/`}>
                    <img src={loginURL} alt="logo" style={{width:75}}></img>

                    <Box style={{display:'flex'}}>
                        <Explore>
                            Explore&nbsp;
                             <Box component="span" style={{color:'#ffe500'}} > Plus </Box>
                        </Explore>

                        <PlusImage src={imageURL} alt="plus-logo"></PlusImage>
                    </Box>
                </Component>

                <Search></Search>

                <Wrapper>
                    <CustomBotton/>
                </Wrapper>
            
            </Toolbar>
            
        </StyledHeader>
    )
}



export default Header;