import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Typography, Box, Avatar, Container, Grid } from '@mui/material';
import { BASE_URL } from '../pages/Home';
// import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';



const DailyDealsItems = ({items}) => {


  return (
        // <Grid container laptop={1024} tablet={640} mobile={0} desktop={1280} >
        <ComponentWrapper>
                <Link to='/product-details'>
                <ProductImage>
                        <img src={`${BASE_URL}${items?.img_1}`} alt='Item' />
                </ProductImage>
                </Link>
            
            <ProductDetails>
                <Typography variant='h4' sx={{fontSize: {lg: 25,md: 15,sm: 15,xs: 10}}}>{items.name}</Typography>
                <Typography variant='h5' sx={{fontSize: {lg: 25,md: 15,sm: 15,xs: 10}}} style={{color: "#FF2164"}}>GH¢{items.prize-(items.discount/100)*(items.prize)} <Typography variant='span' style={{textDecoration: "line-through", color: "#C4BDBD", fontWeight: "400", fontSize: "16px"}}>₵{items.prize}</Typography></Typography>
                <div className='Itemprogress'>
                    <Typography >Available: <Typography variant='span'>21</Typography></Typography>
                    <Typography>Sold: <span style={{color: "black", fontWeight: "bold"}}>8</span></Typography>
                </div>
            </ProductDetails>

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