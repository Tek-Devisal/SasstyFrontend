import React from 'react'
import styled from 'styled-components';
import { Typography, Box, Avatar, Container, Grid } from '@mui/material';

// import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';



const DailyDealsItems = ({items}) => {


  return (
        // <Grid container laptop={1024} tablet={640} mobile={0} desktop={1280} >
        <ComponentWrapper>
            <ProductImage>
                <img src="/Images/laptop.png" alt='Item' />
            </ProductImage>
            <ProductDetails>
                <Typography variant='h4' sx={{fontSize: {lg: 25,md: 15,sm: 15,xs: 10}}}>{items.name}</Typography>
                <Typography variant='h5' sx={{fontSize: {lg: 25,md: 15,sm: 15,xs: 10}}} style={{color: "#FF2164"}}>GH¢{items.prize-(items.discount/100)*(items.prize)} <Typography variant='span' style={{textDecoration: "line-through", color: "#C4BDBD", fontWeight: "400", fontSize: "16px"}}>₵{items.prize}</Typography></Typography>
                <div className='Itemprogress'>
                    <Typography >Available: <Typography variant='span'>21</Typography></Typography>
                    <Typography>Sold: <span style={{color: "black", fontWeight: "bold"}}>8</span></Typography>
                </div>
                {/* <Box className='Progressbar'></Box>
                <Typography className='DTC1'>Hurry up!</Typography>
                <Typography className='OfferEnds'>Offer ends in: </Typography>

                <Counter>
                    <Box>
                        <Avatar>95</Avatar>
                        <Typography >DAYS</Typography>
                    </Box>
                    <Box>
                        <Avatar>63</Avatar>
                        <Typography>HOURS</Typography>
                    </Box>
                    <Box>
                        <Avatar>24</Avatar>
                        <Typography>MINS</Typography>
                    </Box>
                    <Box>
                        <Avatar >10</Avatar>
                        <Typography>SEC</Typography>
                    </Box>
                </Counter> */}
            </ProductDetails>

        </ComponentWrapper>
  )
}

export default DailyDealsItems

const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* width: 220px; */
    width: 23%;
    height: 80%;
    /* background-color: #c4bdbd; */
    /* border: 1px solid #C4BDBD; */
    /* margin-right: 20px; */
`
const ProductImage = styled.div`
    display: flex;
    flex: 0.4;
    justify-content: center;
    align-items: center;

    > img {
        height: 90%;
        width: 90%;
        background-size: cover;
    }
`
const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    flex: 0.6;
    background-color: #fff;
    align-items: center;
`
const Counter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* border: 1px solid red; */
    width: 100%;
    height: 20%;
    /* background-color: #B7B7BA; */
    margin-top: 10px;

    > div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* background-color: red; */
        height: 96%;
        width: 42px;
        /* margin-right: 10px; */
        
        > p{
            color: #8E8E8E;
            font-size: 12px;
        }
    }
`