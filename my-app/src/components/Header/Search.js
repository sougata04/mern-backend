


import { InputBase,Box ,List, ListItem} from "@mui/material";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
// import {getProducts } from "../../redux/actions/ProductAction";
import { useSelector} from "react-redux";
// import React, { useEffect } from "react";

import { Link } from "react-router-dom";
 
const Sinput=styled(Box)`
    background:#ffff;
    width:38%;
    border-radius:2px;
    margin-left:10px;
    display:flex;

`
const Sicon=styled(Box)`
    padding:5px;
    color:blue;
`



const Search=()=>{
    
    const[text,setText]=useState("");


   
    const productDetails = useSelector(state => state.getProduct.products); // Assuming you have a reducer for productDetails
    console.log(productDetails);
  
    

    const getText=(e)=>{
        setText(e.target.value);
    }

    return(
        <Sinput>
        <InputBase placeholder="search for products,brands and more" value={text} style={{width:"100%",paddingLeft:"20px"}} onChange={getText}></InputBase>
        <Sicon>
            <SearchIcon/>
        </Sicon>
            {

                text && <List style={{position:'absolute',background:'white',marginTop:'40px'}}>
                        {
                            productDetails.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>{
                                return(
                                <ListItem style={{color:'black',marginTop:'20px'}}>
                                    <Link to={`/product/${product.id}`} style={{textDecoration:'none',color:'light Blue'}} onClick={()=>{setText('')}}>
                                        {product.title.longTitle}

                                    </Link>
                                </ListItem>
                                );
                            })

                        }

                </List>
            }

        </Sinput>
    )
}

export default Search;