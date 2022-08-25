import React from 'react'
import styled from 'styled-components';

import { 
    Button,
    // Divider,
    // Tabs,
    // Tab,
    // Box,
} from '@mui/material';


const ProductListings = () => {
  return (
    <>
        <ComponentWrapper>
            <ProductImage>
                <img src='/Images/shirt.png' alt='Product Item'/>
            </ProductImage>
            <ProductDetails>
                <p style={{fontSize: "14px", color: '#F93C00'}}>$120.00 <br/><span>$130.00</span> 8% off</p>
                <p>Black Shirt</p>
                <p>Any other descriptions</p>
                <Button style={{marginTop: "5px", width: "100px", height: "30px", borderRadius: "5px", backgroundColor: "#FF7A00", fontSize:"13px", textTransform: "capitalize"}} variant="contained" size="small">
                    Shop now
                </Button>
            </ProductDetails>
        </ComponentWrapper>
        
    </>
  )
}

export default ProductListings

const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 180px;
    height: 50%;
    margin-right: 25px;
    margin-bottom: 15px;
    /* background-color: #c4bdbd; */
    border-radius: 10px;
`
const ProductImage = styled.div`
    display: flex;
    flex: 0.8;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    /* border-radius: 10px 10px 0px 0px; */

    > img {
        height: 100%;
        width: 100%;
        background-size: cover;
    }
`
const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    flex: 0.2;
    /* background-color: #F7F7F7; */
    /* border-radius: 0px 0px 10px 10px; */

    >p:nth-child(3) {
        color: #757E7E;
        /* font-weight: 300; */
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    > p >span {
        font-size: 13px;
        text-decoration: line-through;
        color: #444242;
        opacity: 0.3;
    }
`