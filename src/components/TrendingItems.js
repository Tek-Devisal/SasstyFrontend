import React from 'react'
import styled from 'styled-components';

const TrendingItems = () => {
  return (
    <ComponentWrapper>
         <ProductImage>
                <img src='/Images/watch.png' alt='Product Item'/>
            </ProductImage>
            <ProductDetails>
                <p>north edge aqua</p>
        </ProductDetails>
    </ComponentWrapper>
  )
}

export default TrendingItems

const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    width: 180px;
    height: 300px;
    margin-top: 20px;
    /* background-color: #c4bdbd; */
    /* border-radius: 10px; */
`
const ProductImage = styled.div`
    display: flex;
    flex: 0.8;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    /* border-radius: 10px 10px 0px 0px; */

    > img {
        height: 70%;
        width: 100%;
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
        font-weight: 390;
        text-transform: uppercase;
        font-size: 18px;
    }
`