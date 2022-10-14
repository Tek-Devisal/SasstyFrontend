import React from 'react'
import styled from 'styled-components';

const ProductsRowTwo = ({items}) => {
  return (
    <>
        <ComponentWrapper>
            <ProductImage>
                <img src='/Images/eyeset.png' alt='Product Item'/>
            </ProductImage>
            <ProductDetails>
                <p>{items.name}</p>
                <p style={{fontSize: "14px", fontWeight: "bold"}}>GH¢{items.prize}</p>
            </ProductDetails>
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
    margin-top: 70px;
    border-radius: 10px;
`
const ProductImage = styled.div`
    display: flex;
    flex: 0.6;
    background-color: #F7F7F7;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 0px 0px;

    > img {
        height: 90%;
        width: 90%;
        background-size: cover;
    }
`
const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.4;
    background-color: #EBFCFC;
    border-radius: 0px 0px 10px 10px;

    >p {
        color: #757E7E;
        font-weight: 500;
    }
`