import React from 'react'
import styled from 'styled-components';
import { BASE_URL } from '../pages/Home';
import { Link } from "react-router-dom";

const TrendingItemsTwo = ({items}) => {

    const getSubId = (id) => { 
        localStorage.setItem("Specific product id", id)
        console.log("Testing ",id)
     }

  return (
    <>
        <ComponentWrapper>
            <Link  onClick={()=>{getSubId(items.id)}} to='/product-details'>
                <ProductImage>
                    <img src={`${BASE_URL}${items?.img_1}`} alt='Product Item'/>
                </ProductImage>
                <ProductDetails>
                    <p>{items?.name}</p>
                    <p style={{fontSize: "14px", fontWeight: "bold", color: '#FF2164'}}>$120.00 <span>$130.00</span></p>
                </ProductDetails>
            </Link>
        </ComponentWrapper>
    </>
  )
}

export default TrendingItemsTwo

const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 180px;
    height: 100%;
    /* background-color: #c4bdbd; */
    border-radius: 10px;
    cursor: pointer;

    > a {
        color: inherit;
        text-decoration: none;
    }

    @media only screen and (max-width: 600px) {
    /* display: none; */
    width: 47%;
    flex-wrap: wrap;
  }
`
const ProductImage = styled.div`
    display: flex;
    /* flex: 0.8; */
    height: 220px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    contain: content;
    /* border-radius: 10px 10px 0px 0px; */

    > img {
        height: 80%;
        width: 100%;
        object-fit: contain;
        background-size: cover;
    }
`
const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.2;
    background-color: #F7F7F7;
    /* border-radius: 0px 0px 10px 10px; */

    >p {
        color: #757E7E;
        font-weight: 500;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    > p >span {
        font-size: 10px;
        text-decoration: line-through;
    }
`