import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';
import { BASE_URL } from '../pages/Home';

const ProductsRowTwo = ({items}) => {

    const getSubId = (id) => { 
        localStorage.setItem("Specific product id", id)
        console.log("Testing ",id)
     }

  return (
    <>
        <ComponentWrapper>
            <Link onClick={()=>{getSubId(items.id)}} to='/product-details'>
            <ProductImage>
                <img src={`${BASE_URL}${items?.img_1}`} alt='Product Item'/>
            </ProductImage>
            
            
            <ProductDetails>
                <Typography sx={{fontSize: {lg: 14,md: 12,sm: 10,xs: 10}}}>{items.name}</Typography>
                <p style={{fontSize: "14px", fontWeight: "bold"}}>GH¢{items.prize}</p>
            </ProductDetails>
            </Link>
        </ComponentWrapper>
        
    </>
  )
}

export default ProductsRowTwo

const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* width: 180px; */
    width: 19%;
    height: 80%;
    /* background-color: #c4bdbd; */
    margin-top: 40px;
    border-radius: 10px;

    > a{
        text-decoration: none;
        /* line-height: 10px; */
    }
`
const ProductImage = styled.div`
    display: flex;
    /* flex: 0.6; */
    height: 130px;
    background-color: #F7F7F7;
    justify-content: center;
    align-items: center;
    contain: content;
    border-radius: 10px 10px 0px 0px;

    > img {
        height: 90%;
        width: 90%;
        object-fit: contain;
        background-size: cover;
    }
`
const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* flex: 0.4; */
    height: 100px;
    background-color: #EBFCFC;
    border-radius: 0px 0px 10px 10px;
    padding: 30px;
    contain: content;

    >p {
        white-space: nowrap;
        color: #757E7E;
        font-weight: 500;
        line-height: 20px;
    }
`