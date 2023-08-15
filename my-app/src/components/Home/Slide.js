

import { useSelector } from 'react-redux'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import {Box,Typography,styled,Button} from '@mui/material'

import { Link } from 'react-router-dom';






const responsive = {
    
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

  const Image=styled("img")({

      width:'auto',
      height:200
      })







const Slide=({title})=>{

        const myProducts = useSelector(state => state.getProduct.products); // Extract products from the state
        
        return(
          <Box>
        
          <Box style={{display:'flex',justfyContent:'space-between',background:'white',margin:'6px',borderRadius:'2px'}}>
            <Typography style={{fontSize:'20px',background:'white',fontWeight:'bold',margin:'4px',padding:'4px'}}>{title}</Typography>

            <Button variant='contained' style={{marginLeft: 'auto'}}>View All</Button>
          </Box>
    
        <Box style={{background:'white',margin:'6px'}}>
        <Carousel responsive={responsive}
        swipeable={false}
        draggable={false}
        autoPlay={true}
        autoPlaySpeed={3000}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        
        containerClass="carousel-container"
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        
        
        infinite={true}
  
  
  
        >
                {
                        myProducts.map(product=>{
                                
                              return(
                                <Link to={`/product/${product.id}`} style={{textDecoration:'none'}}>
                                  <Box style={{justifyContent:'center',padding:'6px',borderRadius:'2px'}}>
                                  <Image src={product.url} alt="product" key={product.id}  style={{padding:'6px'}}/>
                                  <Typography style={{fontWeight:600,}}>{product.title.shortTitle}</Typography>
                                  <Typography style={{fontWeight:300,color:'red'}}>{product.discount}</Typography>
                                  </Box>
                                 </Link>
                                 );

                                
                        })

                }
            

        </Carousel>
        </Box>
        </Box>
        );

}

export default Slide;