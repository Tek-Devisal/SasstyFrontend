import React from 'react'
import styled from 'styled-components';
import { BASE_URL } from '../pages/Home';

const TrendingItems = ({items}) => {
    console.log("Image Link", items.img_1)
  return (
    <ComponentWrapper>
         <ProductImage>
                
                <img src={`${BASE_URL}${items.img_1}`} alt='Product Item'/>
            </ProductImage>
            <ProductDetails>
                <p>{items.name}</p>
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
    height: 280px;
    margin-top: 20px;
    /* border: 1px solid red; */
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
        height:80%;
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
        font-weight: 390;
        text-transform: uppercase;
        font-size: 18px;
    }
`