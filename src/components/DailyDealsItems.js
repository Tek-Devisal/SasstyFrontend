import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Typography, Box, Avatar, Container, Grid } from '@mui/material';
import { BASE_URL } from '../pages/Home';
// import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';



const DailyDealsItems = ({items}) => {

    const getSubId = (id) => { 
        localStorage.setItem("Specific product id", id)
        console.log("Testing ",id)
     }

  return (
        // <Grid container laptop={1024} tablet={640} mobile={0} desktop={1280} >
        <ComponentWrapper>
            <Link  onClick={()=>{getSubId(items.id)}} to='/product-details'>
                
                <ProductImage>
                        <img src={`${BASE_URL}${items?.img_1}`} alt='Item' />
                </ProductImage>
            
            
            <ProductDetails>
                <Typography variant='h4' sx={{fontSize: {lg: 18,md: 13,sm: 13,xs: 13}, textAlign: 'center'}}>{items.name}</Typography>
                <Typography variant='h5' sx={{fontSize: {lg: 19,md: 13,sm: 13,xs: 13}}} style={{color: "#FF2164"}}>GH¢{items.prize-(items.discount/100)*(items.prize)} <Typography variant='span' style={{textDecoration: "line-through", color: "#C4BDBD", fontWeight: "400", fontSize: "16px"}}>₵{items.prize}</Typography></Typography>
                <div className='Itemprogress'>
                    <Typography>Available: <Typography variant='span' >21</Typography></Typography>
                    <Typography>Sold: <span style={{color: "black", fontWeight: "bold"}}>8</span></Typography>
                </div>
            </ProductDetails>
            </Link>
        </ComponentWrapper>
  )
}

export default DailyDealsItems

const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    /* width: 220px; */
    width: 23%;
    height: 100%;
    cursor: pointer;
    /* background-color: #c4bdbd; */
    /* border: 1px solid #C4BDBD; */
    contain: content;
    /* margin-right: 20px; */

    > a {
        color: inherit;
        text-decoration: none;
    }

    @media only screen and (max-width: 600px) {
    /* display: none; */
    width: 48%;
    flex-wrap: wrap;
}
    
`
const ProductImage = styled.div`
    display: flex;
    height: 270px;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */

    > img {
        height: 200px;
        width: 200px;
        object-fit: contain;
        background-size: cover;
    }
`
const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    height: 100px;
    background-color: #fff;
    align-items: center;
    /* border: 1px solid green; */
`