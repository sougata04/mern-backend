
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import { bannerData } from '../../constrains/data';

import { styled } from '@mui/material';


const StyledImage=styled("img")(({ theme }) => ({
  width: '100%',
  height: '280px',
  [theme.breakpoints.down('sm')]: {
    ObjectFit:'cover',
    height: '150px', // Adjust the height for smaller screens
  },
}));

const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Banner=()=>{


    return(
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

                bannerData.map(data =>{
                    return(
                    <StyledImage src={data.url} alt='banner'></StyledImage>

                    )

                })
            }
        </Carousel>
    )
}

export default Banner;