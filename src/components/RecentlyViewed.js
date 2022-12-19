import React from 'react'
import styled from 'styled-components';

const RecentlyViewed = ({items}) => {
  return (
    <>
        <ComponentWrapper>
            <ProductImage>
                <img src='/Images/laptop.png' alt='Product Item'/>
            </ProductImage>
            <ProductDetails>
                <p>{items.name}</p>
                <p style={{fontSize: "14px", fontWeight: "bold", color: '#FF2164'}}>GH¢{items.prize}<span>$130.00</span></p>
            </ProductDetails>
        </ComponentWrapper>
        
    </>
  )
}

export default RecentlyViewed

const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 180px;
    height: 100%;
    /* background-color: #c4bdbd; */
    border-radius: 10px;

    @media only screen and (max-width: 600px) {
    /* display: none; */
    width: 47%;
    flex-wrap: wrap;
  }
`
const ProductImage = styled.div`
    display: flex;
    flex: 0.8;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    /* border-radius: 10px 10px 0px 0px; */

    > img {
        height: 80%;
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
        font-weight: 500;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    > p >span {
        font-size: 10px;
        text-decoration: line-through;
    }
`