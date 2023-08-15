
import { useDispatch} from 'react-redux';
import { useEffect } from "react";
import Banner from "./Banner";
import NavBar from "./Navbar";
import { Fragment } from "react";
import {Box,styled} from "@mui/material";
import { getProducts } from "../../redux/actions/ProductAction";

import Slide from './Slide';

const Components=styled(Box)`
    padding:4px;
    background-color:#2d292d22;
    border-radius:4px;
    

`
const Home=()=>{

    
    
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getProducts());
      }, [dispatch]);

    return (
        <Fragment>
        

        <NavBar/>
        <Components>
            <Banner/>
            <Slide title="Top Discounts"/>
            <Slide title="Top Deals On Fashion"/>
            <Slide title="Deals Of The Day"/>
            <Slide title='Top Picks For You'/>
            
        </Components>
        </Fragment>
    )
}

export default Home;

